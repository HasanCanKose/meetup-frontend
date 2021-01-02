import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EventsServices} from '../../../services/events.service';
import {EventResponseModel} from '../../event/models/event-response.model';
import {UserService} from '../../../services/user.service';
import {UserResponseModel} from '../models/user-response.model';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  createEventFrom: FormGroup;

  events: EventResponseModel[] = [];
  user: UserResponseModel;

  constructor(private eventsServices: EventsServices, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.createEventFrom = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
      place: new FormControl(null),
      date: new FormControl(null)
    })

    this.eventsServices.getUserEvents().subscribe(events => {
      this.events = events;
    })
    this.userService.changedUser$.subscribe(user => {
      this.user = user;
    })
  }

  onSubmit() {
    let eventRequest = {
      title: this.createEventFrom.get('title').value,
      description: this.createEventFrom.get('description').value,
      place: this.createEventFrom.get('place').value,
      date: this.createEventFrom.get('date').value
    }
    this.eventsServices.createEvent(eventRequest).subscribe();
    this.eventsServices.changedUserEvents$.subscribe(events => {
      this.events = events;
    })

  }

  onDeleteEvent(id: number) {
    this.eventsServices.deleteEvent(id).subscribe();
  }
}
