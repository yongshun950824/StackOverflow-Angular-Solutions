import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    TagModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, HelloComponent, OrdersListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
