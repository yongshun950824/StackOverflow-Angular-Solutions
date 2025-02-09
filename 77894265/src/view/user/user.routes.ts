import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../../shared/layouts/user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamsComponent } from './teams/teams.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => DashboardComponent,
  },
  {
    path: 'teams',
    loadComponent: () => TeamsComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashbaord',
  },
];
