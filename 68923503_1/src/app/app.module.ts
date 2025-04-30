import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DialogModule,
    TabViewModule,
    ButtonModule
  ],
  declarations: [AppComponent, HelloComponent, DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
