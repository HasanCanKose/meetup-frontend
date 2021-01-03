import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event.service';
import {EventCard} from '../event-card';
import {EventResponseModel} from '../models/event-response.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit{
  public events: EventResponseModel[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(events => {
      this.events = events['events'];
    });
  }

  ngOnInit() {

  }

  onClick() {
    console.log("Button click");
  }
}
