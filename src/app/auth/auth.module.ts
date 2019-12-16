import { NgModule } from "@angular/core";
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AuthService } from './auth.service';


@NgModule({
    declarations: [AuthComponent, LoginComponent],
    imports: [AuthRoutingModule, HttpClientModule, ReactiveFormsModule],
    providers: [AuthService
    ],

})
export class AuthModule {

}