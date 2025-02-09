import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appTestContainer]',
})
export class TestContainerDirective {
  constructor(public viewContainer: ViewContainerRef) {}
}
