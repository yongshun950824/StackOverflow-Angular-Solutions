import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'section-1', component: HomeComponent },
  { path: 'section-2', component: HomeComponent },
  { path: 'section-3', component: HomeComponent },
  { path: 'section-4', component: HomeComponent },
  { path: '**', redirectTo: '' },
];
