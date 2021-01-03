import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { EventResponseModel } from '../models/event-response.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  event: EventResponseModel;
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.data$.subscribe((event) => (this.event = event));
  }

  onClose() {
    this.modalService.close$.next();
  }
}
