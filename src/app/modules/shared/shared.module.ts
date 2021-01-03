import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { EventCardAnimationDirective } from './directives/eventcard-animation.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

@NgModule({
  declarations: [ButtonComponent, EventCardAnimationDirective, DropdownDirective, EllipsisPipe],

  imports: [CommonModule],
  exports: [ButtonComponent, EventCardAnimationDirective, DropdownDirective, EllipsisPipe],
})
export class SharedModule {}
