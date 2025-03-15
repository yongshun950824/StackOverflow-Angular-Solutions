import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';

import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
