import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { EventCard } from '../event-card';
import { EventResponseModel } from '../models/event-response.model';
import { ActivatedRoute } from '@angular/router';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { ModalService } from '../../../services/modal.service';
import { StyleService } from '../../../services/style.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit, OnDestroy {
  public events: EventResponseModel[] = [];
  index: number;
  event: EventResponseModel;
  isEventPage;
  @ViewChild('vc', { static: true, read: ViewContainerRef }) vc: ViewContainerRef;

  constructor(
    private route: ActivatedRoute,
    private cfr: ComponentFactoryResolver,
    private modalService: ModalService,
    private styleService: StyleService,
  ) {
    this.route.data.subscribe((events) => {
      this.events = events['events'];
    });
  }

  ngOnInit() {
    this.modalService.close$.subscribe(() => this.vc.clear());
    this.modalService.event$.subscribe((event) => {
      this.event = event;
      this.events.splice(this.index, 1, this.event);
    });
    this.isEventPage = true;
    this.styleService.eventPage$.next(this.isEventPage);
  }

  ngOnDestroy() {
    this.isEventPage = false;
  }

  onClick(index: number) {
    const componentFactory = this.cfr.resolveComponentFactory(EventDetailComponent);
    this.vc.createComponent(componentFactory);
    this.modalService.data$.next(this.events[index]);
    this.index = index;
  }
}
