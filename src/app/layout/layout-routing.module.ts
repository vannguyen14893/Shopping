
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UserModule } from './user/user.module';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'user', loadChildren: () => UserModule },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }