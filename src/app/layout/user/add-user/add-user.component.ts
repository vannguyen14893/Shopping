import { UserService } from './../user.service';
import { User } from 'src/app/model/user.class';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {
  checkoutForm: FormGroup;
  date = null;
  multipleValue: [];
  roleIds: any;
  user = new User();
  @Input() isVisible: boolean;
  @Output() returnIsVisible = new EventEmitter<boolean>();
  @Output() value = new EventEmitter<any>();
  listOfOptionRole: Array<{ label: string; value: string }> = [];
  selectedAvatarFiles: File[] = [];
  size = 'default';
  nameAvatar: string;
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.checkoutForm = this.fb.group({
      email: '',
      mobile: '',
      birthDay: '',
      fullName: '',
      sex: '',
      age: ''

    });
  }
  ngOnInit() {
    const children: Array<{ label: string; value: string }> = [];
    children.push(
      { label: 'ROLE_ADMIN', value: '1' },
      { label: 'ROLE_USER', value: '2' },
      { label: 'ROLE_PM', value: '3' },
      { label: 'ROLE_QA', value: '17' }
    );
    this.listOfOptionRole = children;
  }
  onChangeAvatar(value) {
    if (value) {
      console.log(value);
      const avatar = value.target.files[0];
      this.selectedAvatarFiles.push(avatar);
      this.nameAvatar = value.target.files[0].name;
    }
  }
  handleOk(): void {
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
    this.user.avatar = this.nameAvatar;
    this.user.roleIds = this.roleIds;
    this.isVisible = false;
    this.returnIsVisible.emit(this.isVisible);
    this.value.emit(this.user);
    this.userService.uploadAvatar(this.selectedAvatarFiles).subscribe(data => {
      console.log(data);
    })
    this.checkoutForm.reset();
  }

  handleCancel(): void {
    this.isVisible = false;
    this.returnIsVisible.emit(this.isVisible);
    this.checkoutForm.reset();
  }

  // _click(value) {
  //   this.checkoutForm.patchValue({ roleIds: value });
  // }
}
