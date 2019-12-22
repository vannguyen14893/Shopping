import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/auth/auth.service';
@Injectable()
export class SettingService extends AuthService {
  private api = 'http://localhost:8080';
  constructor(http: HttpClient) {
    super(http);
  }
  public getMenuByParentId(id: number): Observable<any> {
    return this.get(this.api + '/read-menu/' + id);
  }
  public getAllMenu(): Observable<any> {
    return this.get(this.api + '/read-all-menu');
  }
  public getAllRole(): Observable<any> {
    return this.get(this.api + '/read-all-role');
  }
  public getMenuRole(): Observable<any> {
    return this.get(this.api + '/read-menu-role');
  }
  public updateMenuRole(id: number, roleId: any, status: boolean): Observable<any> {
    return this.put(this.api + '/update-menu-role/' + id + '/status/' + status, roleId);
  }
}
