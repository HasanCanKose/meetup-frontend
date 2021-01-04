import { Injectable } from '@angular/core';

import { Observable, ReplaySubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventResponseModel } from '../modules/event/models/event-response.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EventService {
  apiUrl = environment.apiUrl;

  changedUserEvents$ = new ReplaySubject<EventResponseModel[]>();

  constructor(private http: HttpClient) {}

  public getEvents(): Observable<EventResponseModel[]> {
    return this.http.get<EventResponseModel[]>(`${this.apiUrl}/events`);
  }

  public getUserEvents(): Observable<EventResponseModel[]> {
    return this.http.get<EventResponseModel[]>(`${this.apiUrl}/events/user`);
  }

  public createEvent(request) {
    return this.http.post<EventResponseModel>(`${this.apiUrl}/events`, request);
  }

  public deleteEvent(id: number) {
    return this.http.delete(`${this.apiUrl}/events/${id}`);
  }

  public updateEvent(request) {
    return this.http.patch<EventResponseModel>(`${this.apiUrl}/events`, request);
  }
}
