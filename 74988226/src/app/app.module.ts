import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WorkoutComponent } from './workout/workout.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot({
      mode: 'ios',
    }),
  ],
  declarations: [AppComponent, HelloComponent, WorkoutComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
