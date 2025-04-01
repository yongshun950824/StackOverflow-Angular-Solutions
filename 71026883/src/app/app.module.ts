import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './game/game.component';
import { RouterModule } from '@angular/router';

const ROUTES = [
  {
    path: 'game/:id',
    component: GameComponent,
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  declarations: [AppComponent, HelloComponent, GameComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
