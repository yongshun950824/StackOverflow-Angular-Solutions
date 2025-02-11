import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class App {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  data = {
    name: 'Apple Wong',
    courses: [
      {
        name: 'Mathematics',
      },
      {
        name: 'Science',
      },
    ],
  };

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      courses: this.fb.array([]),
    });

    if (this.data) {
      for (let course of this.data.courses) {
        let courseFormGroup = this.newCourseFromGroup();
        courseFormGroup.patchValue(course);

        this.courses.push(courseFormGroup);
      }
    } else {
      this.addCourse();
    }
  }

  newCourseFromGroup() {
    return this.fb.group({
      name: [''],
    });
  }

  addCourse() {
    this.courses.push(this.newCourseFromGroup());
  }

  get courses() {
    return this.form.controls['courses'] as FormArray;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}

bootstrapApplication(App);
