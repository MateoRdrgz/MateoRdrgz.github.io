import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const position = this.el.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight) {
      this.renderer.addClass(this.el.nativeElement, 'visible');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'visible');
    }
  }
}
