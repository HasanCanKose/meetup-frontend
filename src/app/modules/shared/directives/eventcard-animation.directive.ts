import {AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[eventCardAnimation]',
})
export class EventCardAnimationDirective implements AfterViewInit{

  img;
  infoUp;
  infoDown;
  appButton;


  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.img = this.el.nativeElement.querySelector('img');
    this.infoUp = this.el.nativeElement.querySelector('.info-up');
    this.infoDown = this.el.nativeElement.querySelector('.info-bottom');
    this.appButton = this.el.nativeElement.querySelector('app-button')
  }

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
    this.renderer.addClass(this.img, 'info-animation')
    this.renderer.addClass(this.infoUp, 'info-animation');
    this.renderer.addClass(this.infoDown, 'info-animation');
    this.renderer.addClass(this.appButton, 'info-animation');
  }

  @HostListener('mouseleave') onMouseLeave(e) {
    this.cardTransition = 'all 0.5s ease';
    this.cardTransform = `rotateY(0deg) rotateX(0deg)`;
    this.renderer.removeClass(this.img, 'info-animation')
    this.renderer.removeClass(this.infoUp, 'info-animation');
    this.renderer.removeClass(this.infoDown, 'info-animation');
    this.renderer.removeClass(this.appButton, 'info-animation');

  }


}
