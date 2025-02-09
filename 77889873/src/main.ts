import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppTestComponent } from './test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppTestComponent],
  template: `
    <p>This is App Root</p>
    <app-test></app-test>
  `,
})
export class App {}

bootstrapApplication(App);
