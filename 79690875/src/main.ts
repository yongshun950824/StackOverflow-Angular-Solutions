import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <input (keydown)="onKeyDown($any($event))" />
  `,
})
export class App {
  name = 'Angular';

  onKeyDown = (event: KeyboardEvent): boolean => {
    const regex = new RegExp(/^[0-9.]*$/);

    if (
      !regex.test(event.key) &&
      event.key.length === 1
      //&&
      //event.code !== 'Space'
    ) {
      event.preventDefault();
      return false;
    }

    const target = event.target as HTMLInputElement;
    const start = target?.selectionStart || 0;
    const value =
      target.value.substring(0, start) +
      event.key +
      target.value.substring(start);

    const newRegex = new RegExp(/^(0|[1-9]\d*)?(\.\d{0,2})?$/);
    if (
      !newRegex.test(value) &&
      event.key.length === 1
      //&&
      //event.code !== 'Space'
    ) {
      event.preventDefault();
      return false;
    }

    return true;
  };
}

bootstrapApplication(App);
