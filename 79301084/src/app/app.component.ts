import { Component, OnInit } from '@angular/core';

import { STEP_ITEMS } from './constants/multi-step-form';
import { RecipeMultiStepComponent } from './components/multi-step-form/multi-step-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RecipeMultiStepComponent],
})
export class AppComponent implements OnInit {
  formContent: any;
  formData: any;
  activeStepIndex: number = 0;

  ngOnInit(): void {
    this.formContent = STEP_ITEMS;
    this.formData = {};
  }

  onFormSubmit(formData: any): void {
    this.formData = formData;

    // post form data here
    alert(JSON.stringify(this.formData));
  }
}
