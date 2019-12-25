import { Role } from './../../../../model/role.class';
import { SettingService } from './../../setting.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(private settingService: SettingService) {

  }
  ngOnInit() {
    this.settingService.getAllRole().subscribe(data => {
      this.roles = data;
    });
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
}
