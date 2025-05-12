import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username-validator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  registrationForm!: FormGroup;

  ngOnInit() {
    this.registrationForm = new FormGroup({
      username: new FormControl(
        '',
        [
          Validators.required, UsernameValidators.cannotContainSpace
        ],
        //UsernameValidators.shouldBeUnique
      ),
      password: new FormControl(''),
    });
  }

  get username() {
    return this.registrationForm.controls['username'] as FormControl;
  }
}
