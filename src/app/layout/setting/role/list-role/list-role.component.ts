import { NotifierService } from 'angular-notifier';
import { Observable } from 'rxjs';
import { Role } from './../../../../model/role.class';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as  fromRole from '../role-state/role-reducer';
import * as actionRole from '../role-state/role-action';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-role-list',
  templateUrl: './list-role.component.html'
})
export class RoleListComponent implements OnInit {
  roles: Role[] = [];
  listOfDisplayData: Role[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  numberOfChecked = 0;
  error$: Observable<string>;
  isVisible = false;
  isVisibleEdit = false;
  roleDetail: Role;
  checkError = true;
  constructor(
    private store: Store<fromRole.Appstate>,
    private nofification: NotifierService,
    private nzMessageService: NzMessageService
  ) {

  }
  ngOnInit() {
    this.viewRole();

  }

  showModalAdd(): void {
    this.isVisible = true;
  }

  currentPageDataChange($event: Role[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }
  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }
  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
  }
  viewRole() {
    this.store.dispatch(new actionRole.LoadRoles());
    this.store.pipe(select(fromRole.getRoles)).subscribe(data => {
      this.roles = data;
    });
    this.error$ = this.store.pipe(select(fromRole.getError));
  }
  closeModal(value) {
    this.isVisible = value;
  }
  closeModalEdit(value) {
    this.isVisibleEdit = value;
  }
  editRole(value) {
    this.store.dispatch(new actionRole.EditRole(value));
  }
  addRole(value) {
    this.store.dispatch(new actionRole.AddRole(value));
  }
  showModalEdit(role: Role) {
    this.isVisibleEdit = true;
    this.store.dispatch(new actionRole.GetRole(role.id));
  }
  cancel(): void {
  }
  deleteUser(id: number) {
    this.store.dispatch(new actionRole.DeleteRole(id));

  }
}
