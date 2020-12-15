import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import {EventCardAnimationDirective} from './directives/eventcard-animation.directive';



@NgModule({
    declarations: [ButtonComponent, EventCardAnimationDirective],

    imports: [
        CommonModule
    ],
  exports: [
    ButtonComponent,
    EventCardAnimationDirective
  ]
})
export class SharedModule { }
