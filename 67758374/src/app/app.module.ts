import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
        ReactiveFormsModule, RouterModule.forRoot([]) ],
  declarations: [ AppComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
