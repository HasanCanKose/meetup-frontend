import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '@angular/compiler-cli/src/ngtsc/typecheck/src/environment';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public userAuthentication(request) {
    return this.http.post<string>(`${this.apiUrl}/authenticate`, request, {
      responseType: 'text' as 'json',
    });
  }

  public loggedIn() {
    return !!localStorage.getItem('token');
  }

  public loggedOut() {
    localStorage.removeItem('token');
  }

  public getToken() {
    return localStorage.getItem('token');
  }
}
