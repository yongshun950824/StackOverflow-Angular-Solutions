import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';

import { DisableControlDirective } from './directives/disable-control.directive';
import { SelectComponent } from './select/select.component';

import { IdentifierFilter } from './identifier-filter/identifier-filter.component';
import { ReportsViewTableComponent } from './reports-view-table/reports-view-table.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    DisableControlDirective,
    SelectComponent,
    IdentifierFilter,
    ReportsViewTableComponent,
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
