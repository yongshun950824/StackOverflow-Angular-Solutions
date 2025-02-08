import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { GifComponent } from '../gif/gif.component';
import { GifDetailComponent } from '../gif/gif-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    GifComponent,
    GifDetailComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule, // Add RouterModule to imports array
  ],
  providers: []
})
export class AppModule { }