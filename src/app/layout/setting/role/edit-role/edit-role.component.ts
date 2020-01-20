import { AppState } from './../../../../app-state/app-state';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as  fromRole from '../role-state/role-reducer';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Role } from 'src/app/model/role.class';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['edit-role.component.scss']
})
export class RoleEditComponent implements OnInit {
  @Input() isVisibleEdit: boolean;
  @Output() returnIsVisibleEdit = new EventEmitter<boolean>();
  @Output() value = new EventEmitter<any>();
  editFrom: FormGroup;
  role: Role = new Role();
  constructor(private fb: FormBuilder, private store: Store<fromRole.Appstate>) {

  }
  ngOnInit() {
    const role$: Observable<Role> = this.store.select(
      fromRole.getCurrentUser
    );
    role$.subscribe(data => {
      if (data) {
        this.role = data;
      }
    });
  }

  handleOk(): void {
    this.isVisibleEdit = false;
    this.returnIsVisibleEdit.emit(this.isVisibleEdit);
    this.value.emit(this.role);
    //this.role.roleName = '',
      //this.role.description = '';
  }

  handleCancel(): void {
    //this.role.roleName = '',
      //this.role.description = '';
    this.isVisibleEdit = false;
    this.returnIsVisibleEdit.emit(this.isVisibleEdit);
  }
}
