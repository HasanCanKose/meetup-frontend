import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserResponseModel} from '../../modules/user/models/user-response.model';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: UserResponseModel;

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userService.changedUser$.subscribe(user => {
      this.user = user;
    })
  }

  logout() {
    this.authService.loggedOut();
  }
}
