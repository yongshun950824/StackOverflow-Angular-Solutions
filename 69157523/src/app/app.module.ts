import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, ChartsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
