import { Routes } from '@angular/router';
import { CompanyCreateComponent } from './components/company-create/company-create.component';
import { MainNavComponent } from './main-nav/main-nav.component';

// Option 1 - Export routes
export const routes: Routes = [
  {
    path: '',

    component: MainNavComponent,
    children: [
      {
        path: 'company-create',
        component: CompanyCreateComponent,
        outlet: 'content',
      },

      {
        path: '',
        redirectTo: 'company-create',
        pathMatch: 'full',
        outlet: 'content',
      }, // Default view
    ],
  },
];

// Option 2 - Export routes
/*
const routes: Routes = [
  {
    path: '',

    component: MainNavComponent,
    children: [
      {
        path: 'company-create',
        component: CompanyCreateComponent,
        outlet: 'content',
      },

      {
        path: '',
        redirectTo: 'company-create',
        pathMatch: 'full',
        outlet: 'content',
      }, // Default view
    ],
  },
];
export default routes;
*/
