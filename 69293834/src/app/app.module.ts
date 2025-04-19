import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MattableReactiveComponent } from './mattable-reactive/mattable-reactive.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, ReactiveFormsModule,
    MatTableModule, MatCheckboxModule,
    MatFormFieldModule, MatInputModule,
    BrowserAnimationsModule
  ],
  exports: [
    
  ],
  declarations: [ 
    AppComponent, MattableReactiveComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
