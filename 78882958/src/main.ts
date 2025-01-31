import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NavComponent } from './app/nav/nav.component';
import { Section1Component } from './app/section1/section1.component';
import { Section2Component } from './app/section2/section2.component';
import { Section3Component } from './app/section3/section3.component';
import { Section4Component } from './app/section4/section4.component';
import 'zone.js';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { provideRouter, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    CommonModule,
    RouterModule,
  ],
  template: `
  <div class="container">
     <app-nav></app-nav> 
    <app-section1></app-section1>
    <app-section2></app-section2>
    <app-section3></app-section3>
    <app-section4></app-section4>
  </div>
  `,
})
export class App {
  name = 'Angular';
  ngOnInit(): void {}
}

bootstrapApplication(App, {
  providers: [provideAnimations(), provideRouter([])],
}).catch((err) => console.error(err));
