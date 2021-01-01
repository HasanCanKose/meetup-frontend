import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserResponseModel} from '../../modules/user/models/user-response.model';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: UserResponseModel;
  isAuthenticated: boolean;

  constructor(private userService: UserService, private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.changedUser$.subscribe(user => {
      this.user = user;
    })

  }

  logout() {
    this.authService.loggedOut();
  }


}
