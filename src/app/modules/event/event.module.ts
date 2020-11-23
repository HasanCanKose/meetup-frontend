import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventListComponent } from './event-list/event-list.component';



@NgModule({
  declarations: [EventDetailComponent, EventFormComponent, EventListComponent],
  imports: [
    CommonModule
  ]
})
export class EventModule { }
