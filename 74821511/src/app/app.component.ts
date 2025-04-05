import { Component, VERSION } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  myDetailsForm!: FormGroup;

  ngOnInit() {
    this.myDetailsForm = new FormGroup({
      //... // other form independent controls
      skills: new FormArray([new FormControl('')]),
    });
  }

  get skills(): FormArray {
    return this.myDetailsForm.get('skills') as FormArray;
  }
}
