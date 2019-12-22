import { Menu } from './../../model/menu.class';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user/user.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menus: Menu[] = [];
  constructor(private userService: UserService) {

  }
  ngOnInit() {
    this.userService.viewMenuByUser().subscribe(data => {
      this.menus = data;
    });
  }
}
