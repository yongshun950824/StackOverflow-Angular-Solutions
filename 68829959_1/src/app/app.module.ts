import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IonicModule } from '@ionic/angular';
import { ViewProductPage } from './view-product-page/view-product-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, IonicModule ],
  declarations: [ AppComponent, HelloComponent, ViewProductPage ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
