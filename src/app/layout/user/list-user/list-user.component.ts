import { Component, OnInit } from "@angular/core";

import { SortFilter } from 'src/app/model/sortFilter.class';
import { UserService } from '../user.service';

@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html'
})
export class UserListComponent implements OnInit {
    sortFilter: SortFilter = new SortFilter();
    constructor(private userService: UserService) {

    }
    ngOnInit() {
        this.sortFilter.page = 1;
        this.sortFilter.pageSize = 5;
        this.sortFilter.sort = true;
        this.sortFilter.sortName = "id";
        this.userService.getUser(this.sortFilter).subscribe(data => {
            console.log(data);
        })
    }
}