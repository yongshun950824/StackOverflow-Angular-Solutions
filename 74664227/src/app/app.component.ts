import { Component, VERSION } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myForm!: FormGroup;

  data = {
    name: 'test',
    email: 'test',
    skills: [{ first_skill: '', second_skill: '' }, ''],
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      // Uncomment this part to show generate FormGroup with `initSkillFormGroup` (avoid redundant)
      // skills: new FormArray([
      //   new FormGroup({
      //     first_skill: new FormControl('', Validators.required),
      //     second_skill: new FormControl('', Validators.required),
      //   }),
      // ]),
      skills: new FormArray([this.initSkillFormGroup()]),
    });

    this.myForm.patchValue(this.data);
  }

  addSkills() {
    this.skillsArray.push(this.initSkillFormGroup());
  }

  initSkillFormGroup() {
    return new FormGroup({
      first_skill: new FormControl('', Validators.required),
      second_skill: new FormControl('', Validators.required),
    });
  }

  get skillsArray() {
    return this.myForm.get('skills') as FormArray;
  }

  submit() {
    console.log(this.myForm.value);
  }
}
