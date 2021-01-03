import {Injectable} from '@angular/core';
import {EventResponseModel} from '../modules/event/models/event-response.model';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {EventService} from '../services/event.service';

@Injectable({providedIn: 'root'})
export class EventsResolver implements Resolve<EventResponseModel[]>{

  constructor(private eventsServices: EventService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EventResponseModel[]> | Promise<EventResponseModel[]> | EventResponseModel[] {
    return this.eventsServices.getEvents();
  }


}
