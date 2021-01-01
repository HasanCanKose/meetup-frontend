import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserResponseModel} from '../../modules/user/models/user-response.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: UserResponseModel;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.changedUser$.subscribe(user => {
      this.user = user;
    })
  }

}
