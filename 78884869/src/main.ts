import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NavComponent } from './app/nav/nav.component';
import 'zone.js';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app/app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, CommonModule, RouterModule],
  template: `
  <div class="container">
     <app-nav></app-nav> 
     <router-outlet></router-outlet>
  </div>
  `,
})
export class App {
  name = 'Angular';
  ngOnInit(): void {}
}

bootstrapApplication(App, {
  providers: [provideAnimations(), provideRouter(routes)],
}).catch((err) => console.error(err));
