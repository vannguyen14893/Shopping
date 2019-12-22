import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/auth/auth.service';
@Injectable()
export class UserService extends AuthService {
  private api = 'http://localhost:8080';
  constructor(http: HttpClient) {
    super(http);
  }
  getUser(filter): Observable<any> {
    return this.post(this.api + '/read-all-user', filter);
  }
  count(filter): Observable<any> {
    return this.post(this.api + '/count', filter);
  }
  deleteUser(ids: any): Observable<any> {
    return this.post(this.api + '/delete-user', ids);
  }
  addUser(user: any): Observable<any> {
    return this.post(this.api + '/add-user', user);
  }
  viewMenuByUser() {
    return this.get(this.api + '/read-menu-user');
  }
}
