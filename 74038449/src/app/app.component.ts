import { Component, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  columnList = ['C1', 'C2', 'C3', 'C4'];

  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const columnListDefault = this.columnList[0];

    this.filterForm = this.fb.group({
      filters: this.fb.array([]),
    });

    this.addFormGroupToFiltersArray();

    //this.filterForm.get('columnName')?.setValue(columnListDefault);

    // Set the value to columnName control of **first** FormGroup in filters FormArray.
    //this.filters().get('0').get('columnName').setValue(columnListDefault);

    // Set the value to columnName control of **each** FormGroup in filters FormArray.
    for (let index in this.filters().controls) {
      (this.filters().get(index) as FormGroup)
        .get('columnName')
        .setValue(columnListDefault);
    }
  }

  addFormGroupToFiltersArray() {
    let form = this.fb.group({
      columnName: [],
    });

    this.filters().push(form);
  }

  filters() {
    return this.filterForm.controls.filters as FormArray;
  }

  onSubmit() {}
}
