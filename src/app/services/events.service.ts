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
    return this.http.get<EventResponseModel[]>("http://localhost:8080/events/user").pipe(tap(response => {
      this.changedUserEvents$.next(response);
    }))
  }

  public createEvent(request) {
    return this.http.post("http://localhost:8080/events", request);
  }

  public deleteEvent(id: number){
    return this.http.delete(`http://localhost:8080/events/${id}`);
  }
}
