import { UserRoleComponent } from './user-role.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: UserRoleComponent,
    children: [

      { path: '', pathMatch: 'full', component: UserRoleComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoleRoutingModule { }
