import { PermissionListComponent } from './list-permission/list-permission.component';
import { PermissionComponent } from './permission.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PermissionComponent,
    children: [

      { path: 'list', pathMatch: 'full', component: PermissionListComponent },
      { path: '', pathMatch: 'full', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionRoutingModule { }
