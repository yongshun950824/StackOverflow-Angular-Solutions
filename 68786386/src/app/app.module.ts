import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { DynamicGridComponent } from './dynamic-grid/dynamic-grid.component';
import { RowGroupGridComponent } from './row-group-grid/row-group-grid.component';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    ButtonModule
  ],
  declarations: [AppComponent, DynamicGridComponent, RowGroupGridComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
