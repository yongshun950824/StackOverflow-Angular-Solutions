import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css'],
})
export class WorkoutComponent implements OnInit {
  workoutFormArray: FormArray<any>;
  form: FormGroup;

  ngOnInit() {
    this.workoutFormArray = new FormArray([
      new FormGroup({
        exercise: new FormControl(''),
        reps: new FormControl(''),
      }),
    ]);

    this.form = new FormGroup({
      workoutFormArray: this.workoutFormArray,
    });
  }

  addExercise() {
    this.workoutFormArray.push(
      new FormGroup({
        exercise: new FormControl(''),
        reps: new FormControl(''),
      })
    );
  }

  saveWorkout() {
    console.log(this.workoutFormArray.value);
  }
}
