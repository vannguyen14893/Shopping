
import { Menu } from './../../../../model/menu.class';

import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { SettingService } from '../../setting.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './list-menu.component.html'
})
export class MenuListComponent implements OnInit {
  menus: Menu[] = [];
  listOfDisplayData: Menu[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  numberOfChecked = 0;
  constructor(private settingService: SettingService) {

  }
  ngOnInit() {
    this.settingService.getAllMenu().subscribe(data => {
      this.menus = data;
    });
  }
  currentPageDataChange($event: Menu[]): void {
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
}
