import 'zone.js/dist/zone';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  bootstrapApplication,
  BrowserModule,
  platformBrowser,
} from '@angular/platform-browser';
import { BirdCreateFormComponent } from './create-form/create-form.component';

@Component({
  selector: 'my-app',
  imports: [CommonModule, BirdCreateFormComponent],
  standalone: true,
  template: `
    <create-form></create-form>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
