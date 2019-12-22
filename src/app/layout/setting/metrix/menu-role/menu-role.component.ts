import { OnDestroy } from '@angular/core';
import { Role } from './../../../../model/role.class';
import { Menu } from './../../../../model/menu.class';
import { SettingService } from './../../setting.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

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
    this.getAllMenu();
    this.getAllRole();
    this.getMenuRole();
  }
  ngOnDestroy(): void {
    if (this.subcrition) {
      this.subcrition.unsubscribe();
    }
  }
  getAllMenu() {
    this.settingService.getAllMenu().subscribe(data => {
      this.menus = data;
      this.totalRows = this.menus.length;
    });
  }
  getAllRole() {
    this.settingService.getAllRole().subscribe(data => {
      this.roles = data;
    });
  }
  getMenuRole() {
    this.settingService.getMenuRole().subscribe(data => {
      this.menuRoles = data;
    });
  }
  onSelect(roleId: number, menuId: number, event) {
    if (event.target.checked === true) {
      this.status = true;
      this.subcrition = this.settingService.updateMenuRole(menuId, roleId, this.status).subscribe(data => {
      });
    } else {
      this.status = false;
      this.subcrition = this.settingService.updateMenuRole(menuId, roleId, this.status).subscribe(data => {
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
