import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder } from '@angular/forms';
import { Login } from '../login.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  email = '';
  password = '';
  checkoutForm: any;
  error: string;
  message: string;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      email: '',
      password: ''
    });
  }
  ngOnInit() {

  }
  _login(login) {
    this.authService.login(login).subscribe(data => {
      this.router.navigateByUrl('/layout');
      const token = data.token;
      window.sessionStorage.setItem('token', token);
    }, error => {
      this.error = error;
      console.log(this.error);
      if (this.error['error']['message'] !== null) {
        this.message = this.error['error']['message'];
      } else {
        this.email = this.error['error']['body']['email'];
        this.password = this.error['error']['body']['password'];
      }

    });
  }
}




