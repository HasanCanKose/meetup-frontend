import { Injectable } from '@angular/core';
import { EventCard } from '../modules/event/event-card';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {EventResponseModel} from '../modules/event/models/event-response.model';
import {AuthService} from './auth.service';

@Injectable({ providedIn: 'root' })
export class EventsServices {
  changedEventCards = new Subject<EventCard>();

  constructor(private http: HttpClient, private authService: AuthService) {
  }


  public getEvents(): Observable<EventResponseModel[]> {
    return this.http.get<EventResponseModel[]>("http://localhost:8080/events");
  }

  public getUserEvents(): Observable<EventResponseModel[]> {
    return this.http.get<EventResponseModel[]>("http://localhost:8080/events/user");
  }
}
