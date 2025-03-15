import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { SelectComponent } from './select/select.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, SelectComponent],
  template: `
  <app-select [options]="dataOptions"></app-select>
  `,
})
export class App {
  name = 'Angular';

  dataOptions = [
    {
      value: 'www.some-url.com',
      title: 'Simple',
    },
    {
      value: 'www.some-other-url.com',
      title: 'Live Monitor',
    },
  ];
}

bootstrapApplication(App);
