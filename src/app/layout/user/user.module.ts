import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './list-user/list-user.component';
import { UserComponent } from './user.component';
import { UserService } from './user.service';



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
        UserService
    ]
})
export class UserModule { }