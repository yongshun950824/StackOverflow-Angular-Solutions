import { Component, VERSION } from '@angular/core';
import { IExercises } from './models/IExcercises';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  exerciseData: IExercises = {
    exerciseId: 1,
    exerciseName: 'Excerise 1'
  };
}
