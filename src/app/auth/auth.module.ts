import { NgModule } from "@angular/core";
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthService } from './auth.service';
import { ErrorDialogComponent } from './errordialog.component';
import { ErrorDialogService } from './errordialog.service';
import { HttpConfigInterceptor } from './httpconfig.interceptor';
@NgModule({
    declarations: [AuthComponent, LoginComponent,ErrorDialogComponent],
    imports: [AuthRoutingModule, HttpClientModule, ReactiveFormsModule],
    providers: [AuthService
        ],
    
})
export class AuthModule {

}