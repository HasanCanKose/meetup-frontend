import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponseModel } from '../modules/user/models/user-response.model';
import { ReplaySubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  apiUrl = environment.apiUrl;

  changedUser$ = new ReplaySubject<UserResponseModel>();

  constructor(private http: HttpClient) {}

  userRegister(request) {
    return this.http.post<UserResponseModel>(`${this.apiUrl}/users/create`, request, {
      responseType: 'text' as 'json',
    });
  }

  getUser() {
    return this.http.get<UserResponseModel>(`${this.apiUrl}/users/get`).pipe(
      tap((response: UserResponseModel) => {
        this.changedUser$.next(response);
      }),
    );
  }
}
