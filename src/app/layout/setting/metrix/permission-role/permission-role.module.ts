
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PermissionRoleComponent } from './permission-role.component';
import { PermissionRoleRoutingModule } from './permission-role-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
@NgModule({
  imports: [
    CommonModule,
    PermissionRoleRoutingModule,
    NzTableModule,
    NzPaginationModule

  ],
  declarations: [
    PermissionRoleComponent
  ],
  providers: [

  ],

})
export class PermissionRoleModule { }
