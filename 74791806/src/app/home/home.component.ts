import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { MrgformComponent } from '../mrgform/mrgform.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  MRGForm: FormGroup = new FormGroup({
    data: new FormArray([]),
  });

  ngOnInit(): void {
    this.generateMRGForm();
  }

  generateMRGForm(): void {
    this.MRGForm = new FormGroup({
      data: new FormArray([MrgformComponent.addMGRRowItem()]),
    });
  }

  submitMRGForm(): void {
    console.log(this.MRGForm.value);
  }

  get dataArray(): FormArray {
    return this.MRGForm?.get('data') as FormArray;
  }

  addRow(): void {}

  removeRow(): void {}

  childFormToFormGroup(form: AbstractControl): FormGroup {
    return form as FormGroup;
  }
}
