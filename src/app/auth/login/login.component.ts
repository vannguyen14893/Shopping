import { Component, OnInit } from "@angular/core";
import { AuthService } from '../auth.service';
import { FormBuilder } from '@angular/forms';
import { Login } from '../login.class';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {
    login: Login = new Login();
    email: string = "";
    password: string = "";
    checkoutForm: any;
    constructor(
        private authService: AuthService,
        private fb: FormBuilder,
        private router: Router
    ) {
        this.checkoutForm = this.fb.group({
            email: '',
            password: ''
        })
    }
    ngOnInit() {

    }
    _login(login) {
        this.authService.login(login).subscribe(data => {
            
                this.router.navigateByUrl('/layout');
                let token = data['token']
                window.sessionStorage.setItem('token', token);
                this.router.navigateByUrl('/login');
               
            
        }),(error:HttpErrorResponse)=>{
            console.log(error.error);
        }
        }
    }


