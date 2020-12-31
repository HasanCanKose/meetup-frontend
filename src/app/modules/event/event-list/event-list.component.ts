import { Component, OnInit } from '@angular/core';
import {EventsServices} from '../../../services/events.service';
import {EventCard} from '../event-card';
import {EventResponseModel} from '../models/event-response.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit{
  public events: EventResponseModel[] = [];

  constructor(private eventsService: EventsServices) { }

  ngOnInit() {
    this.eventsService.getEvents().subscribe(res => {
      this.events = res;
    })
  }

  onClick() {
    console.log("Button click");
  }
}
