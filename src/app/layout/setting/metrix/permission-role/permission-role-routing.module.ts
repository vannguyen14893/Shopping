
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionRoleComponent } from './permission-role.component';


const routes: Routes = [
  {
    path: '',
    component: PermissionRoleComponent,
    children: [

      { path: '', pathMatch: 'full', component: PermissionRoleComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionRoleRoutingModule { }
