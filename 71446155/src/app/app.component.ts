import { Component, VERSION } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  customer: FormGroup;

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.customer = new FormGroup({
      name: new FormControl('John Doe'),
      address: new FormControl('123 Fake Street'),
    });
  }
}
