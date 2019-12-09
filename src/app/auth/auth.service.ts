import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {
    private api: string = "http://localhost:8080"
    constructor(private http: HttpClient) {

    }
    login(login: any): Observable<any> {
        
        console.log(login);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        return this.http.post(this.api + '/login', login, { headers });
    }
}