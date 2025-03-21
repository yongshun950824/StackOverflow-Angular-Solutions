import { Component, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  regForm!: FormGroup;
  constructor(private fB: FormBuilder) {}

  ngOnInit(): void {
    this.regForm = this.fB.group({
      fname: ['', [Validators.required, Validators.maxLength(4)]],
      mail: [''],
      pwd: [''],
      altMail: this.fB.array([]),
    });
  }

  get altMail() {
    return this.regForm.get('altMail') as FormArray;
  }

  addNewMail() {
    this.altMail.push(
      this.fB.control('', [Validators.required, Validators.minLength(10)])
    );
  }

  getFormControlFromAltMail(i: number) {
    return this.altMail.get(`${i}`);
  }

  removeMail(i: number) {
    this.altMail.removeAt(i);
  }
  regDataSubmit() {
    // alert("Data submitted successfully");
    console.log(this.regForm.controls);
    console.log(this.regForm.value);
  }
}
