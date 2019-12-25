import { User } from './../model/user.class';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class IdentityService {
  // These 02 properties will be set right in AppComponent -> ngOnInit()
  private token: string;
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {

  }
  isLoggedIn() {
    return this.token !== null;
  }
  getToken() {
    this.token = window.sessionStorage.getItem('token');
  }
}
