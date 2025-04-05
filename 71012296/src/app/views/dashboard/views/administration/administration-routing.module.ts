import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../dashboard.component';
import { CorporateActionComponent } from './views/corporate-action/corporate-action.component';



import { PortfolioComponent } from './views/portfolio/portfolio.component';


export const ADMINISTRATION_ROUTES: Routes = [
 
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/portfolio',
  },

  {
    path: 'portfolio',
    component: PortfolioComponent,
  },

  {
    path: 'corporate-action',
    component: CorporateActionComponent,
  },

  

];

@NgModule({
  imports: [RouterModule.forChild(ADMINISTRATION_ROUTES)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
