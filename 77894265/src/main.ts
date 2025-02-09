import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import 'zone.js';
import { routes } from './ app.routes';
import { SideMenuComponent } from './side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-side-menu></app-side-menu>
    <router-outlet></router-outlet>
  `,
  imports: [CommonModule, RouterOutlet, SideMenuComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
