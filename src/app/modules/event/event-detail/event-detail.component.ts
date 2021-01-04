import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { EventResponseModel } from '../models/event-response.model';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  event: EventResponseModel;
  isParticipated: boolean;
  constructor(private modalService: ModalService, private eventService: EventService) {}

  ngOnInit(): void {
    this.modalService.data$.subscribe((event) => (this.event = event));
  }

  onClose() {
    this.modalService.close$.next();
  }

  onParticipate(eventId: number) {
    if (!this.isParticipated) {
      this.eventService.addParticipant(eventId).subscribe((event) => (this.event = event));
      this.isParticipated = true;
    } else {
      this.eventService.removeParticipant(eventId).subscribe((event) => (this.event = event));
      this.isParticipated = false;
    }
  }
}
