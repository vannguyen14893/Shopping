import { Menu } from './../../model/menu.class';
import { SettingService } from './setting.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-layout',
  templateUrl: './setting.component.html'
})
export class SettingComponent implements OnInit {
  menus: Menu[] = [];
  idMenu: number;
  id: any;
  constructor(
    private settingService: SettingService,
    private location: Location
  ) {

  }
  ngOnInit() {
    this.id = this.location.getState();
    this.idMenu = this.id.id;
    this.settingService.getMenuByParentId(this.idMenu).subscribe(data => {
      this.menus = data;
    });
  }
}
