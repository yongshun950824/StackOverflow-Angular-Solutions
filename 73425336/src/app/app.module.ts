import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Tab1Component } from './components/tab1/tab1.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { DialogModuleModule } from './shared-component/dialog-box/dialog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DialogModuleModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  declarations: [AppComponent, HelloComponent, Tab1Component, Tab2Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
