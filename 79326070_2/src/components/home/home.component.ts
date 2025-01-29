import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home</h1>`,
})
export class HomeComponent {
  name = 'Angular';
}
