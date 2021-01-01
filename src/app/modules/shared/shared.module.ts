import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import {EventCardAnimationDirective} from './directives/eventcard-animation.directive';
import { DropdownDirective } from './directives/dropdown.directive';



@NgModule({
    declarations: [ButtonComponent, EventCardAnimationDirective, DropdownDirective],

    imports: [
        CommonModule
    ],
    exports: [
        ButtonComponent,
        EventCardAnimationDirective,
        DropdownDirective
    ]
})
export class SharedModule { }
