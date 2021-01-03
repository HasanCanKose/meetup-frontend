import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  onClose() {
    this.modalService.close$.next();
  }
}
