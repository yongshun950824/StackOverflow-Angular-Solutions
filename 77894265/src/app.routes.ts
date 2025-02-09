import { Route, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { UserComponent } from './shared/layouts/user/user.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'user',
    loadComponent: () => UserComponent,
    loadChildren: () => import('./view/user/user.routes').then((m) => m.routes),
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
];
