import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
    }),
    emails: this.fb.array([]),
  });

  get emails() {
    return this.profileForm.get('emails') as FormArray;
  }

  addEmail() {
    this.emails.push(
      this.fb.group({
        email: [''],
        send: [''],
      })
    );
  }

  constructor(private fb: FormBuilder) {}

  public submit(): void {
    console.log(this.profileForm.value);
  }
}
