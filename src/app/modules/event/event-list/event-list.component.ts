import { Component, OnInit } from '@angular/core';
import {EventsServices} from '../../../services/events.service';
import {EventCard} from '../event-card';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  public events: Array<EventCard> = [];

  constructor(private eventsService: EventsServices) { }

  ngOnInit(): void {
    this.events = this.eventsService.getEventCards()
  }

}
