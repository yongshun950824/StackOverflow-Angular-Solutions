import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { BuscarComponent } from './buscar/buscar.component';
import { HeroesService } from './services/heroes.service';
import { DividerModule } from 'primeng/divider';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    FormsModule,
    HttpClientModule,
    DividerModule,
  ],
  declarations: [AppComponent, BuscarComponent],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
