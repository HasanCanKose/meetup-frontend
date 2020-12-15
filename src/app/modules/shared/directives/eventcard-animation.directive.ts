import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[eventCardAnimation]',
})
export class EventCardAnimationDirective {
  @HostBinding('style.transform') cardTransform;
  @HostBinding('style.transition') cardTransition;

  @HostListener('mousemove', ['$event']) onMouseMove(e) {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    this.cardTransform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  }

  @HostListener('mouseenter') onMouseEnter(e) {
    this.cardTransition = 'none';
  }

  @HostListener('mouseleave') onMouseLeave(e) {
    this.cardTransition = 'all 0.5s ease';
    this.cardTransform = `rotateY(0deg) rotateX(0deg)`;
  }
}
