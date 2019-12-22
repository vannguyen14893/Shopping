import { PermissionRoleModule } from './metrix/permission-role/permission-role.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuModule } from './menu/menu.module';
import { SettingComponent } from './setting.component';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permisson/permission.module';
import { UserRoleModule } from './metrix/user-role/user-role.module';
import { MenuRoleModule } from './metrix/menu-role/menu-role.module';


const routes: Routes = [
  {
    path: '',
    component: SettingComponent,
    children: [
      { path: 'menu', loadChildren: () => MenuModule },
      { path: 'role', loadChildren: () => RoleModule },
      { path: 'permission', loadChildren: () => PermissionModule },
      { path: 'permission-role', loadChildren: () => PermissionRoleModule },
      { path: 'user-role', loadChildren: () => UserRoleModule },
      { path: 'menu-role', loadChildren: () => MenuRoleModule },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
