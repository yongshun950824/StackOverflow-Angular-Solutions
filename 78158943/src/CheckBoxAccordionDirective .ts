import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[checkBoxAccordionTrigger]',
  standalone: true,
})
export class CheckBoxAccordionDirective {
  @Input('checkBoxAccordionTrigger') triggerId!: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('change') onChange() {
    const accordionBodyElement = this.renderer.selectRootElement(
      `[accordion-body="${this.triggerId}"]`,
      true
    );

    if (this.el.nativeElement.checked) {
      // this.renderer.removeClass(accordionBodyElement, 'hidden');
      this.renderer.removeStyle(accordionBodyElement, 'display');
    } else {
      // this.renderer.addClass(accordionBodyElement, 'hidden');
      this.renderer.setStyle(accordionBodyElement, 'display', 'hidden');
    }
  }
}
