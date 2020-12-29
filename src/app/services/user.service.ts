import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserResponseModel} from '../modules/user/models/userResponse.model';

@Injectable({providedIn: 'root'})
export class UserService{

  constructor(private http: HttpClient) {
  }

  userRegister(request){
    return this.http.post<UserResponseModel>("http://localhost:8080/users/create", request, {responseType: 'text' as 'json'})
  }
}
