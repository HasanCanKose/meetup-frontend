import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[eventCardAnimation]',
})
export class EventCardAnimationDirective {
  @HostBinding('style.transform') cardTransform;
  @HostBinding('style.transition') cardTransition;

  @HostListener('mousemove', ['$event']) onMouseMove(e) {

    let x = e.pageX;
    let y = e.pageY;
    if(x<420 || x < 850){
      x += 200;
    }
    if(y<250){
      y += 200;
    }
    if(y>800){
      y/=y;
    }
    let xAxis = (window.innerWidth / 2 - x) / 75;
    let yAxis = (window.innerHeight / 2 - y) / 75;
    console.log("X", e.pageX);
    console.log("Y",e.pageY);
    this.cardTransform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  }

  @HostListener('mouseenter') onMouseEnter(e) {
    this.cardTransition = 'all 0.2s ease';
  }

  @HostListener('mouseleave') onMouseLeave(e) {
    this.cardTransition = 'all 0.5s ease';
    this.cardTransform = `rotateY(0deg) rotateX(0deg)`;
  }
}
