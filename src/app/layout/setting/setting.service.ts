import { Role } from './../../model/role.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/auth/auth.service';
@Injectable()
export class SettingService {
  private api = 'http://localhost:8080';
  constructor(
    private http: HttpClient,
    private auth: AuthService) {
  }
  public getMenuByParentId(id: number): Observable<any> {
    return this.http.post(this.api + '/read-menu/', id, { headers: this.auth.createHeaders('/read-menu/') });
  }
  public getAllMenu(): Observable<any> {
    return this.http.get(this.api + '/read-all-menu', { headers: this.auth.createHeaders('/read-all-menu') });
  }
  public getAllRole(): Observable<Role[]> {
    return this.http.get<Role[]>(this.api + '/read-all-role', { headers: this.auth.createHeaders('/read-all-role') });
  }
  public getMenuRole(): Observable<any> {
    return this.http.get(this.api + '/read-menu-role', { headers: this.auth.createHeaders('/read-menu-role') });
  }
  public updateMenuRole(id: number, roleId: any, status: boolean): Observable<any> {
    return this.http.put(this.api + '/update-menu-role/' + id + '/status/' + status, roleId,
      { headers: this.auth.createHeaders('/update-menu-role/') });
  }
  public getListPermission(): Observable<any> {
    return this.http.get(this.api + '/list-priviege', { headers: this.auth.createHeaders('/list-priviege') });
  }
  public getListPermissionRole(): Observable<any> {
    return this.http.get(this.api + '/list-priviege-role', { headers: this.auth.createHeaders('/list-priviege-role') });
  }
  public updatePrivilegeRole(id: number, roleId: any, status: boolean): Observable<any> {
    return this.http.put(this.api + '/update-privilege-role/' + id + '/status/' + status, roleId,
      { headers: this.auth.createHeaders('/list-priviege-role') });
  }
  public addRole(role: Role): Observable<Role> {
    return this.http.post<Role>(this.api + '/add-role', role, { headers: this.auth.createHeaders('/add-role') });
  }
  public getRoleById(id: number): Observable<Role> {
    return this.http.get<Role>(this.api + '/get-role' + '/' + id, { headers: this.auth.createHeaders('/get-role/') });
  }
  public editRole(role: Role): Observable<Role> {
    return this.http.put<Role>(this.api + '/edit-role' + '/' + role.id, role, { headers: this.auth.createHeaders('/edit-role/') });
  }
  public deleteRole(id: number): Observable<number> {
    return this.http.delete<number>(this.api + '/delete-role' + '/' + id, { headers: this.auth.createHeaders('/delete-role/') });
  }
}
