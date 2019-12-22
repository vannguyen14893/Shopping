import { RoleListComponent } from './list-role/list-role.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role-component';


const routes: Routes = [
  {
    path: '',
    component: RoleComponent,
    children: [

      { path: 'list', pathMatch: 'full', component: RoleListComponent },
      { path: '', pathMatch: 'full', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
