import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ChartsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
