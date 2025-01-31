import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[pgc-typo]',
  standalone: true,
})
export class PgcTypoDirective {
  @Input('pgc-typo')
  typography = '';

  @HostBinding('class')
  get className() {
    return `pgc-typo--${this.typography}`;
  }
}
