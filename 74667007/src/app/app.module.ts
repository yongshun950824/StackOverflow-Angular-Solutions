import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { FormCompComponent } from './form-comp/form-comp.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FormCompComponent,
    ProductsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
