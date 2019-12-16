import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";

import { SortFilter } from 'src/app/model/sortFilter.class';
import { UserService } from '../user.service';
import { User } from 'src/app/model/user.class';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common'
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
    unCheck: boolean = true;
    checkToogleButton: boolean = false;
    deleteSinge: any;
    public subcrition: Subscription;
    constructor(
        private userService: UserService,
        private fb: FormBuilder,
        public datepipe: DatePipe,
        private notifier: NotifierService
    ) {
        this.checkoutForm = this.fb.group({
            name: '',
            date: ''
        })
        this.getCheckedItemList();
    }

    ngOnInit() {
        this.sortFilter.page = 1;
        this.sortFilter.pageSize = 5;
        this.sortFilter.sort = true;
        this.sortFilter.sortName = "id";
        this.viewUser(this.sortFilter);

    }
    ngOnDestroy(): void {
        if (this.subcrition) {
            this.subcrition.unsubscribe();
        }
    }
    _changeStatus(value) {
        this.status = value;
    }
    onSubmit(customerData) {
        this.sortFilter.fullName = customerData['name'];
        this.sortFilter.status = this.status;
        let startdate = this.datepipe.transform(customerData['date'][0], 'yyyy-MM-dd');
        this.sortFilter.startDate = startdate;
        let enddate = this.datepipe.transform(customerData['date'][1], 'yyyy-MM-dd');
        this.sortFilter.endDate = enddate;
        this.viewUser(this.sortFilter);
    }

    sortField(name: string) {
        this.sortFilter.sortName = name;
        this.sortFilter.sort = !this.sortFilter.sort;
        this.viewUser(this.sortFilter);
    }
    sortFieldStatus(name: string) {
        this.sortFilter.sortStatus = name;
        this.sortFilter.sort = !this.sortFilter.sort;
        this.viewUser(this.sortFilter);
    }
    loadCustomersLazy(event) {
        this.sortFilter.pageSize = event.rows;
        this.sortFilter.page = event.first;
        this.viewUser(this.sortFilter);
    }
    viewUser(sortFilter: SortFilter) {
        this.userService.getUser(sortFilter).subscribe(data => {
            this.users = data;
        })
        this.userService.count(this.sortFilter).subscribe(data => {
            this.totalRows = data['count'];
        })

    }
    checkStatus(status: number) {
        switch (status) {
            case 0:
                return "badge badge-warning";
            case 1:
                return "badge badge-success";
        }
    }
    checkUncheckAll() {
        for (var i = 0; i < this.users.length; i++) {
            this.users[i].isSelected = this.masterSelected;
        }
        this.getCheckedItemList();
    }
    isAllSelected() {
        this.masterSelected = this.users.every(function (item: any) {
            return item.isSelected == true;

        })
        this.getCheckedItemList();
    }
    _click(value) {
        this.deleteSinge = [];
        this.deleteSinge.push(value.target.defaultValue);
    }
    getCheckedItemList() {
        this.checkedList = [];
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].isSelected)
                this.checkedList.push(this.users[i].id);

        }
        if (this.checkedList.length > 1) {
            this.checkToogleButton = true;
        }

    }
    deleteSingeProduct() {
        this.subcrition = this.userService.deleteUser(this.deleteSinge).subscribe(data => {
            this.notifier.notify('success', data['message'] + " " + data['status'], '');
            this.viewUser(this.sortFilter);
        })
    }

    deleteMultiProduct() {
        if (this.checkedList.length == 0) {
            this.unCheck = true;
        } else {
            this.subcrition = this.userService.deleteUser(this.checkedList).subscribe(data => {
                this.notifier.notify('success', data['message'] + " " + data['status'], '');
                this.viewUser(this.sortFilter);
            })
        }

        if (this.masterSelected) {
            this.masterSelected = false;
            this.checkUncheckAll();
        } else {
            this.checkUncheckAll();
        }

    }
}