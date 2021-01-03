import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EventsServices} from '../../../services/events.service';
import {EventResponseModel} from '../../event/models/event-response.model';
import {UserService} from '../../../services/user.service';
import {UserResponseModel} from '../models/user-response.model';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  createEventFrom: FormGroup;

  events: EventResponseModel[] = [];
  user: UserResponseModel;
  isUpdateMode = false;
  eventId: number;

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

    let stream$;
    if(this.isUpdateMode) {
      let eventUpdateRequest = {
        id: this.eventId,
        title: this.createEventFrom.get('title').value,
        description: this.createEventFrom.get('description').value,
        place: this.createEventFrom.get('place').value,
        date: this.createEventFrom.get('date').value
      }
      stream$ = this.eventsServices.updateEvent(eventUpdateRequest);
      this.isUpdateMode = false;

    } else {
      let eventCreateRequest = {
        title: this.createEventFrom.get('title').value,
        description: this.createEventFrom.get('description').value,
        place: this.createEventFrom.get('place').value,
        date: this.createEventFrom.get('date').value
      }
      stream$ = this.eventsServices.createEvent(eventCreateRequest);



    }
    stream$.subscribe(res => {
      this.eventsServices.getUserEvents().subscribe(events => {
        this.events = events;
      });
    });

    this.createEventFrom.reset();
  }

  onDeleteEvent(id: number) {
    this.eventsServices.deleteEvent(id)
      .pipe(switchMap(() => this.eventsServices.getUserEvents()))
      .subscribe(events => this.events = events);
  }

  onUpdateMode(id: number) {
    const event = this.events.find(event => event.id === id);
    this.eventId = event.id;
    this.createEventFrom.get('title').patchValue(event.title);
    this.createEventFrom.get('description').patchValue(event.description);
    this.createEventFrom.get('place').patchValue(event.place);
    this.createEventFrom.get('date').patchValue(event.date);
    this.isUpdateMode = true;
  }
}
