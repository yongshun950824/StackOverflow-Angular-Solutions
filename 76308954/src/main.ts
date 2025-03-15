import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { NonStandaloneModule } from './non-standalone.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, NonStandaloneModule],
  template: `
    <app-users></app-users>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideAnimations(), provideHttpClient()],
});
