import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
  ],
})
export class App {
  name = 'Angular';

  constructor(private formBuilder: FormBuilder) {}

  formGroup!: FormGroup;
  answerFormGroup: FormGroup = this.formBuilder.group({
    text: ['d', Validators.required],
    value: [0, Validators.required],
  });
  questionTypes = [
    {
      id: '1',
      icon: '',
      text: 'Question 1',
    },
    {
      id: '2',
      icon: '',
      text: 'Question 2',
    },
  ];

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      question: ['', Validators.required],
      questionType: [1, Validators.required],
      answers: new FormArray([]),
      questionTypeControl: [],
    });
    //this.questionTypes = this.localDataService.questionType;
    this.addAnswer();
  }

  // convenience getters for easy access to form fields
  get answers() {
    return this.formGroup.controls['answers'] as FormArray;
  }

  addAnswer() {
    this.answers.push(
      this.formBuilder.group({
        text: ['d', Validators.required],
        value: [0],
      })
    );
  }

  submit() {
    console.log(JSON.stringify(this.formGroup.value));
  }

  updateQuestionType(value: any) {}

  deleteAnswer(value: any) {}
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});
