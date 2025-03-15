import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CoursesComponent } from './courses/courses.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, CoursesComponent],
  template: `
    <app-courses></app-courses>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
