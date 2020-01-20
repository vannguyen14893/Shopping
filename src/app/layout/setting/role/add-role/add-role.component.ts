
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Role } from 'src/app/model/role.class';
@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['add-role.component.scss']
})
export class RoleAddComponent implements OnInit {
  @Input() isVisible: boolean;
  @Output() returnIsVisible = new EventEmitter<boolean>();
  @Output() value = new EventEmitter<any>();
  role: Role = new Role();
  constructor() {

  }
  ngOnInit() {

  }

  handleOk(): void {
    this.isVisible = false;
    this.returnIsVisible.emit(this.isVisible);
    this.value.emit(this.role);
    this.role.roleName = '',
      this.role.description = '';
  }

  handleCancel(): void {
    this.role.roleName = '',
      this.role.description = '';
    this.isVisible = false;
    this.returnIsVisible.emit(this.isVisible);
  }
}
