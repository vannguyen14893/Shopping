
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserListComponent } from './list-user/list-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [

      { path: 'list', pathMatch: 'full', component: UserListComponent },
      { path: ':id', pathMatch: 'full', component: DetailUserComponent },
      { path: 'update/:id', pathMatch: 'full', component: EditUserComponent },
      { path: '', pathMatch: 'full', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
