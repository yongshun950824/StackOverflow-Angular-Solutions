import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatTableModule } from '@angular/material/table';
import { ToTwelveHoursBasePipe } from './pipes/to-twelve-hours-base.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatTableModule ],
  declarations: [ AppComponent, HelloComponent, ToTwelveHoursBasePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
