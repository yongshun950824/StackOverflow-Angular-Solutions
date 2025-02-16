import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    PhotoGalleryComponent,
    NgApexchartsModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
