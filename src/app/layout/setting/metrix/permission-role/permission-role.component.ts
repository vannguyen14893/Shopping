import { Privilege } from './../../../../model/privilege.class';
import { Role } from './../../../../model/role.class';
import { SettingService } from './../../setting.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-permission-role',
  templateUrl: 'permission-role.component.html',
  styleUrls: ['../menu-role/menu-role.component.scss']
})
export class PermissionRoleComponent implements OnInit, OnDestroy {
  privileges: Privilege[] = [];
  roles: Role[] = [];
  privilegeRoles: Privilege[] = [];
  public subcrition: Subscription;
  status: boolean;
  error: string;
  constructor(private settingService: SettingService) {

  }

  ngOnInit() {
    this.getRolePrivilege();
  }
  ngOnDestroy(): void {
    if (this.subcrition) {
      this.subcrition.unsubscribe();
    }
  }
  getRolePrivilege() {
    this.settingService.getAllRole().subscribe(data => {
      this.roles = data;
    });
    this.settingService.getListPermission().subscribe(data => {
      this.privileges = data;
    });
    this.settingService.getListPermissionRole().subscribe(data => {
      this.privilegeRoles = data;
    });
  }
  isCheck(roleID: number, pevilegeId: number) {
    if (this.privilegeRoles !== undefined) {
      for (const menu of this.privilegeRoles) {
        if (menu.id === pevilegeId && menu.roleId === roleID) {
          return true;
        }
      }
      return false;
    }
  }
  onSelect(roleId: number, privilegeId: number, event) {
    if (event.target.checked === true) {
      this.status = true;
      this.subcrition = this.settingService.updatePrivilegeRole(privilegeId, roleId, this.status).subscribe(data => {
        this.getRolePrivilege();
      });

    } else {
      this.status = false;
      this.subcrition = this.settingService.updatePrivilegeRole(privilegeId, roleId, this.status).subscribe(data => {
        this.getRolePrivilege();
      });

    }
  }
}
