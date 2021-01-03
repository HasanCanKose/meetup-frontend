import { Injectable } from '@angular/core';

import { Observable, ReplaySubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventResponseModel } from '../modules/event/models/event-response.model';

@Injectable({ providedIn: 'root' })
export class EventService {
  changedUserEvents$ = new ReplaySubject<EventResponseModel[]>();

  constructor(private http: HttpClient) {}

  public getEvents(): Observable<EventResponseModel[]> {
    return this.http.get<EventResponseModel[]>('http://localhost:8080/events');
  }

  public getUserEvents(): Observable<EventResponseModel[]> {
    return this.http.get<EventResponseModel[]>('http://localhost:8080/events/user');
  }

  public createEvent(request) {
    return this.http.post<EventResponseModel>('http://localhost:8080/events', request);
  }

  public deleteEvent(id: number) {
    return this.http.delete(`http://localhost:8080/events/${id}`);
  }

  public updateEvent(request) {
    return this.http.patch<EventResponseModel>('http://localhost:8080/events', request);
  }
}
