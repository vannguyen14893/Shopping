import { RoleListComponent } from './list-role/list-role.component';
import { RoleRoutingModule } from './role-routing.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoleComponent } from './role-component';

@NgModule({
  imports: [
    CommonModule,
    RoleRoutingModule

  ],
  declarations: [
    RoleListComponent,
    RoleComponent
  ],
  providers: [

  ],

})
export class RoleModule { }
