import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ShowComponent } from './show.component';
import { SharedService } from './shared.service';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, MatTableModule, MatPaginatorModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, ShowComponent],
  bootstrap: [AppComponent],
  providers: [SharedService]
})
export class AppModule {}
