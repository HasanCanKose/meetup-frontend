import { Injectable } from '@angular/core';
import { EventCard } from '../modules/event/event-card';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {EventResponseModel} from '../modules/event/models/event-response.model';
import {AuthService} from './auth.service';
import {tap} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EventsServices {
  changedUserEvents$ = new ReplaySubject<EventResponseModel[]>();

  constructor(private http: HttpClient, private authService: AuthService) {
  }


  public getEvents(): Observable<EventResponseModel[]> {
    return this.http.get<EventResponseModel[]>("http://localhost:8080/events");
  }

  public getUserEvents(): Observable<EventResponseModel[]> {
    return this.http.get<EventResponseModel[]>("http://localhost:8080/events/user");
  }

  public createEvent(request) {
    return this.http.post<EventResponseModel>("http://localhost:8080/events", request);
  }

  public deleteEvent(id: number){
    return this.http.delete(`http://localhost:8080/events/${id}`);
  }

  public updateEvent(request) {
    return this.http.patch<EventResponseModel>("http://localhost:8080/events", request);
  }
}
