import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
//import { AboutComponent } from './components/about/about.component';
//import { DashboardComponent } from './components/dashboard/dashboard.component';
//import { AuthGuard } from './auth.gard';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  {
    path: 'contact',
    loadChildren: () =>
      import('./feature.routes').then((r) => r.FEATURE_ROUTES),
  },
  {
    path: 'skills',
    outlet: 'modal',
    loadComponent: () =>
      import('./modules/skills/skills.component').then(
        (s) => s.SkillsComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
