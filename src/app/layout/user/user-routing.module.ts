
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserListComponent } from './list-user/list-user.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
     
      { path: 'list', component: UserListComponent },
      //{ path: ':id', component: UserUpdateComponent, canActivate: [ViewUserDetailGuard] },
      { path: '', pathMatch: 'full', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }