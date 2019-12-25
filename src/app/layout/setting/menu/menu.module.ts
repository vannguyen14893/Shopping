import { MenuComponent } from './menu.component';
import { MenuListComponent } from './list-menu/list-menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    NzTableModule,
    NzButtonModule

  ],
  declarations: [
    MenuListComponent,
    MenuComponent
  ],
  providers: [

  ],

})
export class MenuModule { }
