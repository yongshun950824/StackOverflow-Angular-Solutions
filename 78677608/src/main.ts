import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { SentencelizePipe } from './sentence-lize.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    {{ textToDisplay | sentence_lize }}
  `,
  imports: [SentencelizePipe],
})
export class App {
  name = 'Angular';

  textToDisplay = "please think about Philip's idea";
}

bootstrapApplication(App);
