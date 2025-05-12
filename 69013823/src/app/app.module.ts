import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {
  ColumnChangesService,
  DimensionsHelper,
  NgxDatatableModule,
  ScrollbarHelper
} from '@swimlane/ngx-datatable';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxDatatableModule],
  declarations: [AppComponent, HelloComponent],
  providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
