import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MarketComponent } from './market.component';
import { MarketRoutingModule } from './market-routing.module';
import { IndiceComponent } from './views/indice/indice.component';
import { ValueComponent } from './views/value/value.component';
import { PipesModule } from '../../../../shared/pipes/pipes.module';

@NgModule({
  declarations: [
    MarketComponent, IndiceComponent, ValueComponent
  ],
  imports: [
    CommonModule,
    MarketRoutingModule,
    PipesModule,
  ]
})
export class MarketModule { }
