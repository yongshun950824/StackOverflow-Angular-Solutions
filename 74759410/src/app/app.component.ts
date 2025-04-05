import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formUpdateStatus: boolean = true; // VARIABLE TO INITIALLY DISABLE THE FIELDS
  myReactiveForm;

  allowFormUpdate() {
    this.formUpdateStatus = false; // NOT WORKING
    // this.myReactiveForm.controls['email'].enable();
    // this.myReactiveForm.controls['contact'].enable();
    // this.myReactiveForm.controls['firstname'].enable();
    //...
    // Code being repeated

    this.myReactiveForm.enable();
  }

  ngOnInit(): void {
    // this.myReactiveForm = new FormGroup({
    //   email: new FormControl({
    //     value: '...',
    //      disabled: this.formUpdateStatus
    //   }),
    //   contact: new FormControl({
    //     value: '...',
    //     disabled: this.formUpdateStatus,
    //   }),
    //   firstname: new FormControl({
    //     value: '...',
    //     disabled: this.formUpdateStatus,
    //   }),
    // });

    this.myReactiveForm = new FormGroup({
      email: new FormControl('...'),
      contact: new FormControl('...'),
      firstname: new FormControl('...'),
    });

    this.formUpdateStatus && this.myReactiveForm.disable();
  }
}
