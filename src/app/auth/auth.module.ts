import { NgModule } from "@angular/core";
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AuthService } from './auth.service';
import { ErrorDialogComponent } from './errordialog.component';
import { ErrorDialogService } from './errordialog.service';
@NgModule({
    declarations: [AuthComponent, LoginComponent,ErrorDialogComponent],
    imports: [AuthRoutingModule, HttpClientModule, ReactiveFormsModule],
    providers: [AuthService,ErrorDialogService]
})
export class AuthModule {

}