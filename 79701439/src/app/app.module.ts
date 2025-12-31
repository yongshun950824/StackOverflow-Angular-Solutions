
import 'hammerjs';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './http-error-handler.service';
import {SelectAllDirective} from './select.directive';


const appRoutes: Routes = [
  { path: '', component: AppComponent }
];


@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,
   BrowserAnimationsModule, MaterialModule, 
  HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      })],
  declarations: [AppComponent, SelectAllDirective],
  bootstrap: [AppComponent],
  exports: [ RouterModule],
  providers: [HttpErrorHandler]
})
export class AppModule { }
