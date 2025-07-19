import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  allOfficeValues: string[] = [];
  myFormFG: FormGroup;

  ngOnInit() {
    this.initializeFG();
    this.allOfficeValues = this.allOffices.map((o) => o.value);
  }

  constructor(private fb: FormBuilder) {}

  get officeControl() {
    return this.myFormFG.get('office');
  }

  allOffices: any[] = [
    { value: 'OFFICE1', viewValue: 'OFFICE1' },
    { value: 'OFFICE2', viewValue: 'OFFICE2' },
    { value: 'OFFICE3', viewValue: 'OFFICE3' },
    { value: 'OFFICE4', viewValue: 'OFFICE4' },
  ];

  initializeFG() {
    this.myFormFG = this.fb.group({
      office: [[]],
    });
  }
}
