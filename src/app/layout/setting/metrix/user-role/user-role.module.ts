import { UserRoleRoutingModule } from './user-role-routing.module';
import { UserRoleComponent } from './user-role.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    UserRoleRoutingModule

  ],
  declarations: [
    UserRoleComponent
  ],
  providers: [

  ],

})
export class UserRoleModule { }
