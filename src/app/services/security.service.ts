import { Injectable } from '@angular/core';
import { RegisterUser, LoginUser ,SecurityResponse } from '../models/app.securitymodels';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
    private baseUrl: string = 'https://localhost:44324/api/Security/';

    private response: SecurityResponse;
    constructor(private http: HttpClient) {
        this.response = new SecurityResponse();
    }
    signup(user: RegisterUser): Observable<any> {
        console.log('User data:', user);
        return this.http.post<any>(`${this.baseUrl}/api/Euser/Register`, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    authUser(user: LoginUser): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/api/Euser/Login`, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}