import { Injectable } from '@angular/core';
import { EventCard } from '../modules/event/event-card';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventsServices {
  changedEventCards = new Subject<EventCard>();
  private eventCards: Array<EventCard> = [
    {
      id: 1,
      name: 'Event1',
      definition: 'Content',
      showContent: false,
    },
    {
      id: 2,
      name: 'Event2',
      definition: 'Content',
      showContent: false,
    },
    {
      id: 3,
      name: 'Event3',
      definition: 'Content',
      showContent: false,
    },
    {
      id: 4,
      name: 'Event4',
      definition: 'Content',
      showContent: false,
    },
    {
      id: 5,
      name: 'Event5',
      definition: 'Content',
      showContent: false,
    },
    {
      id: 6,
      name: 'Event6',
      definition: 'Content',
      showContent: false,
    },
  ];

  public EventCards() {
    return this.eventCards.slice();
  }
}
