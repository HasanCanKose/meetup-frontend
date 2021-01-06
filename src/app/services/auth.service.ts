import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

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
