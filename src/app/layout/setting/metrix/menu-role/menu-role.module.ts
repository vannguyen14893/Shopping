import { MenuRoleRoutingModule } from './menu-role-routing.module';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuRoleComponent } from './menu-role.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
@NgModule({
  imports: [
    CommonModule,
    MenuRoleRoutingModule,
    NzCheckboxModule,
    NzTableModule,
    NzPaginationModule

  ],
  declarations: [
    MenuRoleComponent
  ],
  providers: [

  ],

})
export class MenuRoleModule { }
