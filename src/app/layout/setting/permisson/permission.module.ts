import { PermissionRoutingModule } from './permission-routing.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PermissionComponent } from './permission.component';
import { PermissionListComponent } from './list-permission/list-permission.component';

@NgModule({
  imports: [
    CommonModule,
    PermissionRoutingModule

  ],
  declarations: [
    PermissionComponent,
    PermissionListComponent
  ],
  providers: [

  ],

})
export class PermissionModule { }
