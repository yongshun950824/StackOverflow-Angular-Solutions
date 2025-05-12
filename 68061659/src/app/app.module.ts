import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { PokayokeComponent } from './pokayoke/pokayoke.component';
import { PokayokesService } from './pokayokes.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, PokayokeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PokayokesService]
})
export class AppModule { }
