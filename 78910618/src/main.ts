import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Heading1Directive } from './heading-1.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <!-- With alias -->
    <h1 heading-1="heading-1">
      This is a Heading 1 styled text.
    </h1>

    <!-- Without alias -->
    <!-- <h1 pgc-typo="heading-1">
      This is a Heading 1 styled text.
    </h1> -->
  `,
  imports: [Heading1Directive],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
