import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ClaimsSummaryComponent } from './components/claims-summary/claims-summary.component';
import { ClaimsInsightsComponent } from './components/claims-insights/claims-insights.component';
import { ClaimsComponent } from './components/claims/claims.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' }, // Default route for login
  { path: 'home', component: HomeComponent }, // route for home
  { path: 'claims', component: ClaimsComponent }, // route for claims
  {
    path: 'claims-summary/:claimID',
    component: ClaimsSummaryComponent,
    children: [
      {
        path: 'claims-insights/:type',
        component: ClaimsInsightsComponent,
      },
    ],
  },
  // { path: 'claims-summary/:claimID', component: ClaimsSummaryComponent }, // route for claims summary
  // { path: 'claims-insights/:type', component: ClaimsInsightsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect any unmatched route to error page (Reminder to ask Akanksha to design error page)
];
