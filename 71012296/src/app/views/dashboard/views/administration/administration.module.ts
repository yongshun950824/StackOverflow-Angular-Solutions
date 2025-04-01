import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { CorporateActionComponent } from './views/corporate-action/corporate-action.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { PipesModule } from '../../../../shared/pipes/pipes.module';

@NgModule({
  imports: [CommonModule, AdministrationRoutingModule, PipesModule],
  declarations: [
    AdministrationComponent,
    CorporateActionComponent,
    PortfolioComponent,
  ],
})
export class AdministrationModule {}
