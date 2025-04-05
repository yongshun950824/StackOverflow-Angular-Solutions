import {
  Directive,
  ElementRef,
  HostBinding,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: 'a[href]',
  standalone: true,
})
export class ExcludeMailToDirective {
  readonly regex = new RegExp(/^mailto:/);

  constructor(el: ElementRef) {
    if (!this.regex.test(el.nativeElement.href))
      el.nativeElement.style.backgroundColor = 'pink';
  }
}
