import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventListComponent } from './event-list/event-list.component';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [EventDetailComponent, EventFormComponent, EventListComponent],
    imports: [
       CommonModule,
       SharedModule
    ]
})
export class EventModule { }
