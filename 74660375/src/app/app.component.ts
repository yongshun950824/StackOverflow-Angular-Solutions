import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  noAddInfoReasonsErrorMessage: string = '';
  addNewRequestFormForIndividual: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addNewRequestFormForIndividual = this.fb.group({
      noAdditionalInformationReasons: [],
      noAdditionalInfoCheckbox: []
    })
  }
  onCheckboxChecked(isChecked): void {
    const noAdditionalInfoReasonsControl =
      this.addNewRequestFormForIndividual.get('noAdditionalInformationReasons');
    if (isChecked) {
      noAdditionalInfoReasonsControl.setValidators(Validators.required);
      this.noAddInfoReasonsErrorMessage = 'give reason';
    } else {
      noAdditionalInfoReasonsControl.clearValidators();
      this.noAddInfoReasonsErrorMessage = '';
    }

    noAdditionalInfoReasonsControl.updateValueAndValidity();

    console.log(this.addNewRequestFormForIndividual.valid);
  }
}
