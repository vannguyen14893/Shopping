import { MenuRoleModule } from './metrix/menu-role/menu-role.module';


import { RoleModule } from './role/role.module';
import { SettingService } from './setting.service';
import { SettingRoutingModule } from './setting-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuModule } from './menu/menu.module';
import { SettingComponent } from './setting.component';
import { PermissionModule } from './permisson/permission.module';
import { PermissionRoleModule } from './metrix/permission-role/permission-role.module';
import { UserRoleModule } from './metrix/user-role/user-role.module';
import { NotifierService } from 'angular-notifier';

@NgModule({
  imports: [
    CommonModule,
    SettingRoutingModule,
    MenuModule,
    RoleModule,
    PermissionModule,
    PermissionRoleModule,
    UserRoleModule,
    MenuRoleModule,


  ],
  declarations: [
    SettingComponent
  ],
  providers: [
    SettingService,
    NotifierService
  ],

})
export class SettingModule { }
