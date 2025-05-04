import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@tusharghoshbd/ngx-datatable';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SiteInfoComponent } from './site-info/site-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxDatatableModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, SiteInfoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
