import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public userAuthentication(request){
    return this.http.post("http://localhost:8080/authenticate", request, {responseType: 'text' as 'json'})
  }

  public loggedIn() {
    return !!localStorage.getItem('token');
  }
}
