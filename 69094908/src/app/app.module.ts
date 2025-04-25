import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { PlayersComponent } from './players/players.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, MatTableModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, PlayersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
