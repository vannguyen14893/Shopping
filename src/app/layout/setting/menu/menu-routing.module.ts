import { MenuListComponent } from './list-menu/list-menu.component';
import { MenuComponent } from './menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [

      { path: 'list', pathMatch: 'full', component: MenuListComponent },
      { path: '', pathMatch: 'full', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
