import { User } from './../../model/user.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/auth/auth.service';
import { SortFilter } from 'src/app/model/sortFilter.class';
import { DataResponseUser } from 'src/app/model/dataResponseUser.class';
@Injectable()
export class UserService {
  private api = 'http://localhost:8080';
  constructor(private http: HttpClient, private auth: AuthService) {

  }
  getUser(filter: SortFilter): Observable<User[]> {
    return this.http.post<User[]>(this.api + '/read-all-user', filter, { headers: this.auth.createHeaders('/read-all-user') });
  }
  count(filter): Observable<any> {
    return this.http.post(this.api + '/count', filter, { headers: this.auth.createHeaders('/count') });
  }
  deleteUser(ids: any): Observable<number[]> {
    return this.http.get<number[]>(this.api + '/delete-user' + '/?ids=' + ids, { headers: this.auth.createHeaders('/delete-user/') });
  }
  updateStatusUser(usersId: number[]): Observable<User[]> {
    return this.http.get<User[]>(this.api + '/update-status-user' + '/?ids=' + usersId,
      { headers: this.auth.createHeaders('/update-status-user/') });
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.api + '/add-user', user, { headers: this.auth.createHeaders('/add-user') });
  }
  viewMenuByUser(): Observable<any> {
    return this.http.get(this.api + '/read-menu-user', { headers: this.auth.createHeaders('/read-menu-user') });
  }
  viewUser(filter: SortFilter): Observable<DataResponseUser> {
    return this.http.post<DataResponseUser>(this.api + '/read-all-user', filter, { headers: this.auth.createHeaders('/read-all-user') });
  }
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.api + '/detail-user' + '/' + id, { headers: this.auth.createHeaders('/detail-user/') });
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.api + '/update-user' + '/' + user.id, user, { headers: this.auth.createHeaders('/update-user/') });
  }
  uploadAvatar(file: File[]): Observable<any> {
    const formData = new FormData();
    formData.append('file', file[0]);
    return this.http.post(this.api + '/upload-image', formData, { headers: this.auth.createHeaders('/upload-image') });
  }
}
