import { RoleListComponent } from './list-role/list-role.component';
import { RoleRoutingModule } from './role-routing.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoleComponent } from './role-component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  imports: [
    CommonModule,
    RoleRoutingModule,
    NzTableModule,
    NzButtonModule
  ],
  declarations: [
    RoleListComponent,
    RoleComponent
  ],
  providers: [

  ],

})
export class RoleModule { }
