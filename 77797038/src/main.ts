import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { canadianCities } from './globals';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <select  class="form-group mb-3" name="" id="">
      <option value="">Select</option>
      <option *ngFor="let city of canadianCities" [value]="city">{{city}}</option>
  </select>
  `,
  imports: [CommonModule],
})
export class App {
  name = 'Angular';

  canadianCities = canadianCities;
}

bootstrapApplication(App);
