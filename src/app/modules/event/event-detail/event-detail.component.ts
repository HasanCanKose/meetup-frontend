import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { EventResponseModel } from '../models/event-response.model';
import { EventService } from '../../../services/event.service';
import { UserResponseModel } from '../../user/models/user-response.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  event: EventResponseModel;
  isParticipated: boolean;
  user: UserResponseModel;
  constructor(private modalService: ModalService, private eventService: EventService) {}

  ngOnInit(): void {
    this.modalService.data$.subscribe((event) => (this.event = event));
    this.modalService.user$.subscribe((user) => {
      this.user = user;
    });
    this.isParticipated = this.event.users.some((user) => this.user.id === user.id);
  }

  onClose() {
    this.modalService.close$.next();
    this.modalService.event$.next(this.event);
  }

  onParticipate(eventId: number) {
    if (this.isParticipated) {
      this.eventService.removeParticipant(eventId).subscribe((event) => (this.event = event));
    } else {
      this.eventService.addParticipant(eventId).subscribe((event) => (this.event = event));
    }
    this.isParticipated = !this.isParticipated;
  }
}
