import { Routes } from '@angular/router';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';

export const routes: Routes = [
  { path: 'section-1', component: Section1Component },
  { path: 'section-2', component: Section2Component },
  { path: 'section-3', component: Section3Component },
  { path: 'section-4', component: Section4Component },
  { path: '**', redirectTo: '' },
];
