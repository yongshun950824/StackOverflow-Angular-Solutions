import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DishService } from './services/dish.service';

import { baseURL } from './shared/baseurl';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  providers: [DishService, { provide: 'BaseURL', useValue: baseURL }],
  bootstrap: [AppComponent],
})
export class AppModule {}
