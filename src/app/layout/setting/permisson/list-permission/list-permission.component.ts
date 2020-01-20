import { Privilege } from './../../../../model/privilege.class';

import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../setting.service';

@Component({
  selector: 'app-permission-list',
  templateUrl: './list-permission.component.html'
})
export class PermissionListComponent implements OnInit {
  privileges: Privilege[] = [];
  listOfDisplayData: Privilege[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  numberOfChecked = 0;
  constructor(private settingService: SettingService) {

  }
  ngOnInit() {
    this.settingService.getListPermission().subscribe(data => {
      this.privileges = data;
    });
  }
  currentPageDataChange($event: Privilege[]): void {
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
