import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard.component';

import { IndiceComponent } from './views/indice/indice.component';
import { AjoutComponent } from './views/value/ajout/ajout.component';
import { ValueComponent } from './views/value/value.component';

export const MARKET_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },

  {
    path: 'indice',
    component: IndiceComponent,
  },

  {
    path: 'value',
    component: ValueComponent,
  },
  {
    path: 'ajout',
    component: AjoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(MARKET_ROUTES)],
  exports: [RouterModule],
})
export class MarketRoutingModule {}
