import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactInfoForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.updateContact();
  }

  get contacts() {
    return this.contactInfoForm.controls['contacts'] as FormArray;
  }

  getFormGroup(index: number): FormGroup {
    return this.contacts.at(index) as FormGroup;
  }

  updateContact() {
    this.contactInfoForm = this.fb.group({
      id: [''],
      current_residential_address: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(500)
        ]
      ],
      contacts: this.fb.array([this.addContactFormGroup()])
    });
  }

  addContactFormGroup(): FormGroup {
    return this.fb.group({
      phone_type_id: ['', Validators.required],
      phone_number: ['', [Validators.required, Validators.maxLength(15)]],
      is_primary_contact_number: ['']
    });
  }

  public addContactButtonClick() {
    const contacts = this.contactInfoForm.get('contacts') as FormArray;
    contacts.push(this.addContactFormGroup());
  }

  get fc() {
    return this.contactInfoForm.controls;
  }

  submit() {
    console.log(this.contactInfoForm);
  }

  onIsPrimaryContactChecked(index: number) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (i == index) continue;

      this.getFormGroup(i)
        .get('is_primary_contact_number')
        ?.setValue(false);
    }
  }
}
