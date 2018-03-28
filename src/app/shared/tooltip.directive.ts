import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  @Input() tooltip;

  @HostListener('mouseenter') onMouseEnter() {
    console.log('Mouseeneter' + this.tooltip);
  }
  @HostListener('mouseleave') onMouseLeave() {
    console.log('Mouseleave' + this.tooltip);

  }

  constructor() { }

}
