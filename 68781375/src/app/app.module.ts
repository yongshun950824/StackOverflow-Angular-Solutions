import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { DynamicGridComponent } from './dynamic-grid/dynamic-grid.component';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, TableModule],
  declarations: [AppComponent, DynamicGridComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
