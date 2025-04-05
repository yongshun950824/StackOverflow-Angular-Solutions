import { Component, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  data = {
    streenName: 'street 1',
    emails: ['aaa@stackoverflow.com', 'yyy@stackoverflow.com'],
  };

  myform: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myform = this.fb.group({
      streenName: [],
      emails: this.fb.array([]),
    });

    this.myform.patchValue(this.data);

    for (let index in this.data.emails) {
      (this.myform.controls.emails as FormArray).controls.push(
        new FormControl(this.data.emails[index])
      );
    }

    console.log(this.myform);
  }
}
