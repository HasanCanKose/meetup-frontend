import {Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';

@Injectable({providedIn: 'root'})
export class UserResolver implements Resolve<null>{

  constructor(private authService: AuthService, private userService: UserService) {
  }

  resolve(): Observable<null>{
    return this.authService.loggedIn() ? this.userService.getUser() : of(null);
  }
}
