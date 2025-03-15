import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ConsoleContainerComponent } from './console-container/console-container.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ConsoleContainerComponent],
  template: `
    <app-console-container></app-console-container>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
