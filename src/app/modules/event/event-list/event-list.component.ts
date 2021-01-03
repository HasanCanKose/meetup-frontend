import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { EventCard } from '../event-card';
import { EventResponseModel } from '../models/event-response.model';
import { ActivatedRoute } from '@angular/router';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  public events: EventResponseModel[] = [];
  @ViewChild('vc', { static: true, read: ViewContainerRef }) vc: ViewContainerRef;

  constructor(
    private route: ActivatedRoute,
    private cfr: ComponentFactoryResolver,
    private modalService: ModalService,
  ) {
    this.route.data.subscribe((events) => {
      this.events = events['events'];
    });
  }

  ngOnInit() {
    this.modalService.close$.subscribe(() => this.vc.clear());
  }

  onClick(index: number) {
    const componentFactory = this.cfr.resolveComponentFactory(EventDetailComponent);
    this.vc.createComponent(componentFactory);
    this.modalService.data$.next(this.events[index]);
  }
}
