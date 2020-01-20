import { User } from 'src/app/model/user.class';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromUser from '../user-state/user-reducer';
import { Observable } from 'rxjs';
import { isTemplateRef } from 'ng-zorro-antd';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html'
})

export class EditUserComponent implements OnInit {
  @Input() isVisibleEdit: boolean;
  @Output() returnIsVisibleEdit = new EventEmitter<boolean>();
  @Output() value = new EventEmitter<any>();
  multipleValue: any;
  checkoutForm: FormGroup;
  listOfOptionRole: Array<{ label: string; value: string }> = [];
  size = 'default';
  user: User;
  roleIds: any;
  sex: string;
  constructor(private fb: FormBuilder, private store: Store<fromUser.Appstate>) {

  }
  ngOnInit() {
    this.checkoutForm = this.fb.group({
      id: null,
      email: '',
      mobile: '',
      birthDay: '',
      fullName: '',
      sex: '',
      age: ''
    });
    const children: Array<{ label: string; value: string }> = [];
    children.push(
      { label: 'ROLE_ADMIN', value: '1' },
      { label: 'ROLE_USER', value: '2' },
      { label: 'ROLE_PM', value: '3' },
      { label: 'ROLE_QA', value: '17' }
    );
    this.listOfOptionRole = children;
    const user$: Observable<User> = this.store.select(
      fromUser.getCurrentUser
    );
    user$.subscribe(data => {
      this.user = data;
      if (data) {
        this.checkoutForm.patchValue({
          id: data.id,
          email: data.email,
          fullName: data.fullName,
          mobile: data.mobile,
          age: data.age,
          birthDay: data.birthDay,
          sex: data.sex + ''
        });
        const roleIds = [];
        if (data.roles !== null) {
          data.roles.forEach(role => roleIds.push(role.id + ''));
        }
        this.multipleValue = roleIds;
      }
    });


  }
  handleOk(): void {
    this.isVisibleEdit = false;
    this.returnIsVisibleEdit.emit(this.isVisibleEdit);
    this.roleIds = [];
    if (this.multipleValue != null) {
      this.multipleValue.forEach(item => this.roleIds.push(+item));
    }

    this.user.email = this.checkoutForm.get('email').value;
    this.user.mobile = this.checkoutForm.get('mobile').value;
    this.user.birthDay = this.checkoutForm.get('birthDay').value;
    this.user.fullName = this.checkoutForm.get('fullName').value;
    this.user.sex = + this.checkoutForm.get('sex').value;
    this.user.age = this.checkoutForm.get('age').value;
    this.user.roleIds = this.roleIds;
    this.value.emit(this.user);
    this.checkoutForm.reset();
  }

  handleCancel(): void {
    this.checkoutForm.reset();
    this.isVisibleEdit = false;
    this.returnIsVisibleEdit.emit(this.isVisibleEdit);
  }
}
