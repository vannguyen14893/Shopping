import { PermissionRoutingModule } from './permission-routing.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PermissionComponent } from './permission.component';
import { PermissionListComponent } from './list-permission/list-permission.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  imports: [
    CommonModule,
    PermissionRoutingModule,
    NzTableModule,
    NzButtonModule
  ],
  declarations: [
    PermissionComponent,
    PermissionListComponent
  ],
  providers: [

  ],

})
export class PermissionModule { }
