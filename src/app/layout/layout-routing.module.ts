import { AuthGuard } from './../auth/auth.guard';
import { SettingModule } from './setting/setting.module';
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
            { path: 'setting', loadChildren: () => SettingModule },
            { path: '', pathMatch: 'full', redirectTo: 'user' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
