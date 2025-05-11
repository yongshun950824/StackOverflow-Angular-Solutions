import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { CriminalCaseListComponent } from './criminal-case-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgxDatatableModule  ],
  declarations: [ AppComponent, CriminalCaseListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
