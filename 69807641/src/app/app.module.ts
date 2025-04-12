import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, TableModule],
  declarations: [AppComponent, HelloComponent, ItemListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
