import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { SortFilter } from 'src/app/model/sortFilter.class';
import { UserService } from '../user.service';
import { User } from 'src/app/model/user.class';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NotifierService } from 'angular-notifier';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromUser from '../user-state/user-reducer';
import * as actionUser from '../user-state/user-action';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { isTemplateRef } from 'ng-zorro-antd';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']

})
export class UserListComponent implements OnInit, OnDestroy {
  sortFilter = new SortFilter();
  users: User[] = [];
  totalRows: number;
  checkoutForm: any;
  status: number;
  masterSelected: boolean;
  checkedList: any;
  unCheck = true;
  checkToogleButton = false;
  deleteSinge: any;
  selectedValue: string;
  roles: any;
  statuses: any;
  user: User;
  isLoad: boolean;
  public subcrition: Subscription;
  editCache: { [key: string]: { edit: boolean; data: User } } = {};
  id: any;
  listOfDisplayData: User[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  numberOfChecked = 0;
  isVisible = false;
  isVisibleEdit = false;
  userEdit = new User();
  arrUserId: any;
  arrUser: any;
  flag = true;
  listDataChecked: User[] = [];
  roleName: string;
  roleNames: any;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    public datepipe: DatePipe,
    private notifier: NotifierService,
    private store: Store<fromUser.Appstate>,
  ) {
    this.checkoutForm = this.fb.group({
      name: '',
      date: '',

    });
  }

  ngOnInit() {
    this.roles = [
      { text: 'Admin', value: 1 },
      { text: 'User', value: 2 },
    ];
    this.statuses = [
      { text: 'Active', value: 1 },
      { text: 'InActive', value: 0 },
    ];
    this.sortFilter.page = 1;
    this.sortFilter.pageSize = 50;
    this.sortFilter.sort = true;
    this.sortFilter.sortName = 'id';
    this.viewUser(this.sortFilter);
  }
  ngOnDestroy(): void {
    if (this.subcrition) {
      this.subcrition.unsubscribe();
    }
  }

  onChangeRole(value) {
    this.sortFilter.page = 1;
    this.sortFilter.roleIds = value;
    this.viewUser(this.sortFilter);
  }
  filterStatus(value) {
    this.sortFilter.page = 1;
    this.sortFilter.status = value;
    this.viewUser(this.sortFilter);
  }
  onSubmit(customerData) {
    this.sortFilter.page = 1;
    this.sortFilter.fullName = customerData.name;
    const startDate = this.datepipe.transform(customerData.date[0], 'yyyy-MM-dd');
    this.sortFilter.startDate = startDate;
    const endDate = this.datepipe.transform(customerData.date[1], 'yyyy-MM-dd');
    this.sortFilter.endDate = endDate;
    this.viewUser(this.sortFilter);
  }

  sortField(sort: { key: string; value: string }) {
    this.sortFilter.page = 1;
    this.sortFilter.sortName = sort.key;
    this.sortFilter.sort = !this.sortFilter.sort;
    this.viewUser(this.sortFilter);
  }
  sortFieldStatus(name: string) {
    this.sortFilter.page = 1;
    this.sortFilter.sortStatus = name;
    this.sortFilter.sort = !this.sortFilter.sort;
    this.viewUser(this.sortFilter);
  }

  changePage(value) {
    this.sortFilter.page = value;
    this.viewUser(this.sortFilter);
  }
  changePageSize(value) {
    this.sortFilter.pageSize = value;
    this.viewUser(this.sortFilter);
  }

  viewUser(sortFilter: SortFilter) {
    this.isLoad = true;
    this.store.dispatch(new actionUser.LoadUsers(sortFilter));
    this.store.pipe(select(fromUser.getUsers)).subscribe(data => {
      this.users = data;
      if (this.users.length > 0) {
        this.totalRows = this.users[0].count;
      }
      this.isLoad = false;
    });

  }
  checkStatus(status: number) {
    switch (status) {
      case 0:
        return 'badge badge-danger';
      case 1:
        return 'badge badge-success';
    }
  }

  checkAll(value: boolean): void {
    if (value === true) {
      this.flag = false;
    } else {
      this.flag = true;
    }
    this.users.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }
  refreshStatus(): void {
    this.listDataChecked = [];
    this.isAllDisplayDataChecked = this.users.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.users.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
    this.users.forEach(item => {
      if (this.listDataChecked.indexOf(item) === -1 && this.mapOfCheckedId[item.id]) {
        this.listDataChecked.push(item);
        if (this.listDataChecked.length > 0) {
          this.flag = false;
        } else {
          this.flag = true;
        }
      } else if (this.listDataChecked.indexOf(item) >= 0 && !this.mapOfCheckedId[item.id]) {
        this.listDataChecked.splice(this.listDataChecked.indexOf(item), 1);
      }
    });
  }
  showModalAdd(): void {
    this.isVisible = true;
  }
  closeModalAdd(value) {
    this.isVisible = value;
  }
  addUser(value) {
    this.store.dispatch(new actionUser.AddUser(value));
  }
  showModalEdit(user: User) {
    this.isVisibleEdit = true;
    this.store.dispatch(new actionUser.GetUser(user.id));
  }
  closeModalEdit(value) {
    this.isVisibleEdit = value;
  }
  editUser(value) {
    this.store.dispatch(new actionUser.UpdateUser(value));
  }

  deleteSingle(id: number): void {
    this.arrUserId = [];
    this.arrUserId.push(id);
    this.store.dispatch(new actionUser.DeleteUser(this.arrUserId));
  }
  updateSingleStatus(id: number): void {
    this.arrUser = [];
    this.arrUser.push(id);
    this.store.dispatch(new actionUser.UpdateStatusUser(this.arrUser));
    this.checkAll(false);
  }
  deleteMulti(): void {
    this.arrUserId = [];
    this.listDataChecked.forEach(item => this.arrUserId.push(item.id));
    this.store.dispatch(new actionUser.DeleteUser(this.arrUserId));
    this.checkAll(false);
    this.flag = true;

  }
  updateMultiStatus(): void {
    this.arrUser = [];
    this.listDataChecked.forEach(item => this.arrUser.push(item.id));
    this.store.dispatch(new actionUser.UpdateStatusUser(this.arrUser));
    this.checkAll(false);
    this.flag = true;
  }
}
