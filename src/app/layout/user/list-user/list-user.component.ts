import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { SortFilter } from 'src/app/model/sortFilter.class';
import { UserService } from '../user.service';
import { User } from 'src/app/model/user.class';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NotifierService } from 'angular-notifier';
import { Subscription } from 'rxjs';

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
  i = 0;
  listOfDisplayData: User[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  numberOfChecked = 0;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    public datepipe: DatePipe,
    private notifier: NotifierService
  ) {
    this.checkoutForm = this.fb.group({
      name: '',
      date: '',

    });
    this.getCheckedItemList();
  }
  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }
  cancelEdit(id: number): void {
    const index = this.users.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.users[index] },
      edit: false
    };
  }

  saveEdit(id: number): void {
    const index = this.users.findIndex(item => item.id === id);
    Object.assign(this.users[index], this.editCache[id].data);
    this.editCache[id].edit = false;
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
    this.updateEditCache();
  }
  ngOnDestroy(): void {
    if (this.subcrition) {
      this.subcrition.unsubscribe();
    }
  }
  updateEditCache(): void {
    this.users.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }
  addRow(): void {
    this.users = [
      ...this.users,
      {
        id: 9999 + this.i,
        fullName: null,
        email: null,
        mobile: null,
        status: null,
        birthDay: null,
        roleName: null,
        isSelected: null,
        age: null,
        sex: null,
        password: null
      }
    ];
    this.i++;
    this.updateEditCache();
  }
  deleteRow(id: number): void {
    this.users = this.users.filter(d => d.id !== id);
  }
  onChangeRole(value) {
    this.sortFilter.roleIds = value;
    this.viewUser(this.sortFilter);
  }
  filterStatus(value) {
    this.sortFilter.status = value;
    this.viewUser(this.sortFilter);
  }
  onSubmit(customerData) {
    this.sortFilter.fullName = customerData.name;
    const startDate = this.datepipe.transform(customerData.date[0], 'yyyy-MM-dd');
    this.sortFilter.startDate = startDate;
    const endDate = this.datepipe.transform(customerData.date[1], 'yyyy-MM-dd');
    this.sortFilter.endDate = endDate;
    this.viewUser(this.sortFilter);
  }

  sortField(sort: { key: string; value: string }) {
    this.sortFilter.sortName = sort.key;
    this.sortFilter.sort = !this.sortFilter.sort;
    this.viewUser(this.sortFilter);
  }
  sortFieldStatus(name: string) {
    this.sortFilter.sortStatus = name;
    this.sortFilter.sort = !this.sortFilter.sort;
    this.viewUser(this.sortFilter);
  }
  // loadCustomersLazy(event) {
  //     this.sortFilter.pageSize = event.rows;
  //     this.sortFilter.page = event.first;
  //     this.viewUser(this.sortFilter);
  // }
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
    this.userService.getUser(sortFilter).subscribe(data => {
      this.users = data.users;
      this.totalRows = data.count;
      this.updateEditCache();
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
  currentPageDataChange($event: User[]): void {
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
  _click(value) {
    this.deleteSinge = [];
    this.deleteSinge.push(value.target.defaultValue);
  }
  getCheckedItemList() {
    this.checkedList = [];
    for (const user of this.users) {
      if (user.isSelected) {
        this.checkedList.push(user.id);
      }
    }
    if (this.checkedList.length > 1) {
      this.checkToogleButton = true;
    }

  }
  deleteSingeProduct() {
    this.subcrition = this.userService.deleteUser(this.deleteSinge).subscribe(data => {
      this.notifier.notify('success', data.message + ' ' + data.status, '');
      this.viewUser(this.sortFilter);
    });
  }

  deleteMultiProduct() {
    if (this.checkedList.length === 0) {
      this.unCheck = true;
    } else {
      this.subcrition = this.userService.deleteUser(this.checkedList).subscribe(data => {
        this.notifier.notify('success', data.message + ' ' + data.status, '');
        this.viewUser(this.sortFilter);
      });
    }
  }
  addUser(value) {
    // this.user=value;
    // this.subcrition = this.userService.addUser(this.user).subscribe(data => {
    //     console.log(data);
    // });
  }
}
