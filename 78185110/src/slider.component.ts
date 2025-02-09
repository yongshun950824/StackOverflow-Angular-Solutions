import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  template: '<button (click)="onClick($event)">{{ active }}</button>',
})
export class SliderComponent {
  @Input() active: boolean = false;
  @Output() activeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClick(event: Event) {
    event.stopImmediatePropagation();

    this.active = !this.active;
    this.activeChange.emit(this.active);
  }
}
