import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';

export const FEATURE_ROUTES: Routes = [
  {
    path: '',
    component: ContactComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'contact',
      },
      {
        path: 'education',
        component: EducationComponent,
        // loadComponent: () =>
        //   import('./modules/education/education.component').then(
        //     (c) => c.EducationComponent
        //   ),
        outlet: 'modal',
      },
    ],
  },
];
