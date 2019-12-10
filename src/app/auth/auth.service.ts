import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {

    }
    login(login: any): Observable<any> {
        return this.http.post('http://localhost:8080/login', login);
    }

    get(url: string, params?: {}, responseType?: string): Observable<any> {
        switch (responseType) {
            case 'text':
                return this.http.get(url, {
                    headers: this.createHeaders(),
                    params,
                    responseType: 'text',
                })

            case 'blob':
                return this.http.get(url, {
                    headers: this.createHeaders(),
                    params,
                    responseType: 'blob',
                });
            default:
                return this.http.get(url, {
                    headers: this.createHeaders(),
                    params
                })

        }
    }

    post(url: string, data: any, params?: {}, responseType?: string): Observable<any> {
        switch (responseType) {
            case 'text':
                return this.http.post(url, data, {
                    headers: this.createHeaders() || {},
                    responseType: 'text',
                    params
                });
            default:
                return this.http.post(url, data, {
                    headers: this.createHeaders() || {},
                    params
                });
        }
    }

    /**
     * Update an entity.
     * @param url the api url
     * @param data the entity to be updated
     */
    put(url: string, data: any, responseType?: string): Observable<any> {
        switch (responseType) {
            case 'text':
                return this.http.put(url, data, {
                    headers: this.createHeaders() || {},
                    responseType: 'text'
                });
            default:
                return this.http.put(url, data, {
                    headers: this.createHeaders() || {},
                });
        }
    }

    /**
     * Delete an entity.
     * @param url the api url
     * @param id the entity id to be deleted
     */
    delete(url: string, id: any, responseType?: string): Observable<any> {
        switch (responseType) {
            case 'text':
                return this.http.delete(url, {
                    headers: this.createHeaders() || {},
                    responseType: 'text'
                });
            default:
                return this.http.delete(url, {
                    headers: this.createHeaders() || {},
                });
        }
    }
    public createHeaders() {
        return new HttpHeaders().set('Authorization', this.getToken());
    }
    private getToken() {
        return window.sessionStorage.getItem('token');
    }
}