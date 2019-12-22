
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PermissionRoleComponent } from './permission-role.component';
import { PermissionRoleRoutingModule } from './permission-role-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PermissionRoleRoutingModule

  ],
  declarations: [
    PermissionRoleComponent
  ],
  providers: [

  ],

})
export class PermissionRoleModule { }
