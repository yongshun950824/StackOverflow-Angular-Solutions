import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { AppComponent } from './app.component';
import { DataService } from './data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService, provideCharts(withDefaultRegisterables())]
})
export class AppModule { }
