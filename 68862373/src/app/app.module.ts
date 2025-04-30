import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { TabViewModule } from 'primeng/tabview';
import { AppRoutingModule } from './app.routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [BrowserModule, FormsModule, TabViewModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, MainComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
