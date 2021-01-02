import { Component, OnInit } from '@angular/core';
import {EventsServices} from '../../../services/events.service';
import {EventResponseModel} from '../../event/models/event-response.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  events: EventResponseModel[] = [];

  constructor(private eventsServices: EventsServices) { }

  ngOnInit(): void {
    this.eventsServices.getUserEvents().subscribe(events => {
      this.events = events;
    })
  }

}
