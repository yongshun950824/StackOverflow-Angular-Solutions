import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  providers: [provideCharts(withDefaultRegisterables())],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
