import { OnDestroy } from '@angular/core';
import { Role } from './../../../../model/role.class';
import { Menu } from './../../../../model/menu.class';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SettingService } from '../../setting.service';

@Component({
  selector: 'app-menu-role',
  templateUrl: './menu-role.component.html',
  styleUrls: ['./menu-role.component.scss']
})
export class MenuRoleComponent implements OnInit, OnDestroy {
  menus: Menu[] = [];
  roles: Role[] = [];
  menuRoles: Menu[] = [];
  menu: Menu = new Menu();
  totalRows: number;
  status: boolean;
  public subcrition: Subscription;
  constructor(private settingService: SettingService) {

  }

  ngOnInit() {
    this.getMenuRole();
  }
  ngOnDestroy(): void {
    if (this.subcrition) {
      this.subcrition.unsubscribe();
    }
  }
  getMenuRole() {
    this.settingService.getMenuRole().subscribe(data => {
      this.menuRoles = data;
    });
    this.settingService.getAllMenu().subscribe(data => {
      this.menus = data;
      this.totalRows = this.menus.length;
    });
    this.settingService.getAllRole().subscribe(data => {
      this.roles = data;
    });
  }
  onSelect(roleId: number, menuId: number, event) {
    if (event.target.checked === true) {
      this.status = true;
      this.subcrition = this.settingService.updateMenuRole(menuId, roleId, this.status).subscribe(data => {
        this.getMenuRole();
      });

    } else {
      this.status = false;
      this.subcrition = this.settingService.updateMenuRole(menuId, roleId, this.status).subscribe(data => {
        this.getMenuRole();
      });

    }
  }
  isCheck(roleID: number, menuID: number) {
    if (this.menuRoles !== undefined) {
      for (const menu of this.menuRoles) {
        if (menu.id === menuID && menu.roleId === roleID) {
          return true;
        }
      }
      return false;
    }
  }
}
