import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'other-container',
})
export class OtherContainerDirective {
  constructor(public viewContainer: ViewContainerRef) {}
}
