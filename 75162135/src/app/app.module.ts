import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { CustomPieComponent } from './custom-pie.component';

@NgModule({
  declarations: [AppComponent, CustomPieComponent],
  imports: [BrowserModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
