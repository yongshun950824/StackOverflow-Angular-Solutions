import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[phoneFormatterDirective]',
  standalone: true,
})
export class PhoneFormatterDirective {
  constructor(public control: NgControl) {}

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    event.preventDefault();

    const input = this.control.control!;

    console.log(input.value);
    let trimmed = input.value
      .replaceAll('-', '')
      .replaceAll('(', '')
      .replaceAll(')', '')
      .replaceAll(/\s+/g, '');
    if (trimmed.length > 12) {
      trimmed = trimmed.substr(0, 12);
    }

    let numbers = [];
    numbers.push(trimmed.substr(0, 3));

    if (trimmed.substr(3, 2) !== '') numbers.push(trimmed.substr(3, 3));
    if (trimmed.substr(6, 3) != '') numbers.push(trimmed.substr(6, 4));

    input!.setValue(numbers.join('-'), { emitEvent: false });
  }
}
