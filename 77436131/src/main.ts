import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './main.html',
})
export class App {
  keyValueFA = new FormArray([this.newKeyValueFG]);
  //keyServFA = new FormArray([this.newServFG]);

  professions = [
    {
      _id: 1,
      name: 'Lawyer',
    },
    {
      _id: 2,
      name: 'Doctor',
    },
    {
      _id: 3,
      name: 'Developer',
    },
  ];

  getProfessionNameByLang(name: string) {
    return name;
  }

  propertyFG = new FormGroup({
    keyValue: this.keyValueFA,
  });

  get newKeyValueFG(): FormGroup {
    return new FormGroup({
      prof: new FormControl(null),
      services: new FormArray([this.newServFG]),
    });
  }

  get newServFG(): FormGroup {
    return new FormGroup({
      serv: new FormControl(null),
    });
  }

  get keyValueArrayFGControls(): FormGroup[] {
    return this.keyValueFA.controls as FormGroup[];
  }

  serviceControlsByKeyValueFG(rootIndex: number): FormArray {
    return (this.keyValueFA.controls[rootIndex] as FormGroup).controls[
      'services'
    ] as FormArray;
  }

  addNewKeyValueFG(): void {
    this.keyValueFA.push(this.newKeyValueFG);
  }

  addNewServFG(rootIndex: number): void {
    this.serviceControlsByKeyValueFG(rootIndex).push(this.newServFG);
  }

  removeNewKeyValueFG(index: number): void {
    this.keyValueFA.removeAt(index);
  }

  removeNewServFG(rootIndex: number, index: number): void {
    this.serviceControlsByKeyValueFG(rootIndex).removeAt(index);
  }
}

bootstrapApplication(App);
