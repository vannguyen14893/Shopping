import { MenuComponent } from './menu.component';
import { MenuListComponent } from './list-menu/list-menu.component';
import { MenuRoutingModule } from './menu-routing.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule

  ],
  declarations: [
    MenuListComponent,
    MenuComponent
  ],
  providers: [

  ],

})
export class MenuModule { }
