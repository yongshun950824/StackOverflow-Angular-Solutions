import { JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
} from '@angular/forms';
import {
  MatCheckboxModule,
  MatCheckboxChange,
} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    MatCheckboxModule,
    MatFormFieldModule,
    JsonPipe,
  ],
})
export class App {
  name = 'Angular';

  tasks = [
    { itemId: 1, invoice: 'Invoice 1' },
    { itemId: 2, invoice: 'Invoice 3' },
    { itemId: 3, invoice: 'Invoice 3' },
  ];

  constructor(private formBuilder: UntypedFormBuilder) {}
  serviceTaskForm = this.formBuilder.group({
    itemIds: [[]],
  });

  ngOnInit() {
    this.itemIdFormControl.patchValue([1]);
  }

  onCheckboxChange($event: MatCheckboxChange, itemId: number) {
    let value: number[] = this.itemIdFormControl.value;

    if ($event.checked) value.push(itemId);
    else value.splice(value.indexOf(itemId), 1);

    this.itemIdFormControl.setValue(value, {
      emitEvent: false,
    });
  }

  isChecked(itemId: number) {
    return this.itemIdFormControl.value.indexOf(itemId) > -1;
  }

  get itemIdFormControl() {
    return this.serviceTaskForm.controls['itemIds'];
  }
}

bootstrapApplication(App);
