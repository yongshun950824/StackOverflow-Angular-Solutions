import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { DynamicGridComponent } from './dynamic-grid/dynamic-grid.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, TableModule, CommonModule],
  declarations: [AppComponent, DynamicGridComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
