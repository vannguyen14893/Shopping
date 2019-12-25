import { Menu } from './../../model/menu.class';
import { SettingService } from './setting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './setting.component.html'
})
export class SettingComponent implements OnInit {
  menus: Menu[] = [];
  idMenu: number;
  constructor(
    private settingService: SettingService,
  ) {

  }
  ngOnInit() {
    this.idMenu = + localStorage.getItem('menuId');
    this.settingService.getMenuByParentId(this.idMenu).subscribe(data => {
      this.menus = data;
    });
  }
}
