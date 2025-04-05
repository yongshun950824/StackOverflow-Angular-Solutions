import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BarchartComponent } from './barchart/barchart.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgChartsModule],
  declarations: [AppComponent, HelloComponent, BarchartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
