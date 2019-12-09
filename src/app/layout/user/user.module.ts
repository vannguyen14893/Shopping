import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './list-user/list-user.component';
import { UserComponent } from './user.component';


@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    declarations: [
        UserListComponent,
        UserComponent
    ],
    providers: [

    ]
})
export class UserModule { }