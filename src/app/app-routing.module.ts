import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  { path: 'auth', loadChildren: () => AuthModule },
  { path: 'layout', loadChildren: () => LayoutModule },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
