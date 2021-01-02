import { Component, OnInit } from '@angular/core';
import {EventsServices} from '../../../services/events.service';
import {EventResponseModel} from '../../event/models/event-response.model';
import {UserService} from '../../../services/user.service';
import {UserResponseModel} from '../models/user-response.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  events: EventResponseModel[] = [];
  user: UserResponseModel;

  constructor(private eventsServices: EventsServices, private userService: UserService) { }

  ngOnInit(): void {
    this.eventsServices.getUserEvents().subscribe(events => {
      this.events = events;
    })
    this.userService.changedUser$.subscribe(user => {
      this.user = user;
    })
  }

}
