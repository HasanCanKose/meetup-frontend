import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { EventResponseModel } from '../../event/models/event-response.model';
import { UserService } from '../../../services/user.service';
import { UserResponseModel } from '../models/user-response.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { StyleService } from '../../../services/style.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  createEventFrom: FormGroup;

  events: EventResponseModel[] = [];
  user: UserResponseModel;
  isUpdateMode = false;
  eventId: number;
  isProfilePage;

  constructor(
    private eventsServices: EventService,
    private userService: UserService,
    private styleService: StyleService,
  ) {}

  ngOnInit(): void {
    this.createEventFrom = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
      place: new FormControl(null),
      date: new FormControl(null),
    });

    this.eventsServices.getUserEvents().subscribe((events) => {
      this.events = events;
    });
    this.userService.changedUser$.subscribe((user) => {
      this.user = user;
    });
    this.isProfilePage = true;
    this.styleService.profilePage$.next(this.isProfilePage);
  }
  ngOnDestroy() {
    this.isProfilePage = false;
    this.styleService.profilePage$.next(this.isProfilePage);
  }

  onSubmit() {
    let stream$;
    if (this.isUpdateMode) {
      let eventUpdateRequest = {
        id: this.eventId,
        title: this.createEventFrom.get('title').value,
        description: this.createEventFrom.get('description').value,
        place: this.createEventFrom.get('place').value,
        date: this.createEventFrom.get('date').value,
      };
      stream$ = this.eventsServices.updateEvent(eventUpdateRequest);
      this.isUpdateMode = false;
    } else {
      let eventCreateRequest = {
        title: this.createEventFrom.get('title').value,
        description: this.createEventFrom.get('description').value,
        place: this.createEventFrom.get('place').value,
        date: this.createEventFrom.get('date').value,
      };
      stream$ = this.eventsServices.createEvent(eventCreateRequest);
    }
    stream$.subscribe((res) => {
      this.eventsServices.getUserEvents().subscribe((events) => {
        this.events = events;
      });
    });

    this.createEventFrom.reset();
  }

  onDeleteEvent(id: number) {
    this.eventsServices
      .deleteEvent(id)
      .pipe(switchMap(() => this.eventsServices.getUserEvents()))
      .subscribe((events) => (this.events = events));
  }

  onUpdateMode(id: number) {
    const event = this.events.find((event) => event.id === id);
    this.eventId = event.id;
    this.createEventFrom.get('title').patchValue(event.title);
    this.createEventFrom.get('description').patchValue(event.description);
    this.createEventFrom.get('place').patchValue(event.place);
    this.createEventFrom.get('date').patchValue(event.date);
    this.isUpdateMode = true;
  }
}
