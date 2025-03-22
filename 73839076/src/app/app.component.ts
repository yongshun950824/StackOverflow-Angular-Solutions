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
    details: [
      { label: 'My label 1', description: 'My description 1' },
      { label: 'My label 2', description: 'My description 2' },
    ],
  };

  _detailRowNumber: Array<number> = [0];

  // detail: FormGroup = new FormGroup({
  //   label: new FormControl('label'),
  //   description: new FormControl('description'),
  // });

  constructor(private fb: FormBuilder) {}

  fields: string[] = [];
  formMain: FormGroup;

  ngOnInit() {
    this.formMain = this.fb.group({ details: this.fb.array([]) });
    this.addDetailsFormGroup();
  }

  addDetailsFormGroup() {
    (this.formMain.controls.details as FormArray).push(
      new FormGroup({
        label: new FormControl('label'),
        description: new FormControl('description'),
      })
    );
  }

  increaseDetailRow(index: number): void {
    this._detailRowNumber.splice(++index, 0, Date.now());
    this.addDetailsFormGroup();
  }

  decreaseDetailRow(index: number): void {
    this._detailRowNumber = this._detailRowNumber.filter(
      (item) => item != index
    );

    (this.formMain.controls.details as FormArray).removeAt(index);
  }
}
