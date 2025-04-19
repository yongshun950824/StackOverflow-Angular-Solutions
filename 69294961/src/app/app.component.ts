import { Component, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';
import { finalize } from 'rxjs/operators';
import { EmployeeResponse, IContact, IEmployee } from './models/model';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading = false;
  isSubmitted = false;
  contactdata!: IEmployee;
  contactInfoForm!: FormGroup;
  _id: number = 1;
  data: any = {};

  public SearchCountryField = SearchCountryField;
  public CountryISO = CountryISO;

  preferredCountries = [];

  phonetypes = [
    { id: 1, type_name: 'Type 1' },
    { id: 2, type_name: 'Type 2' },
  ];

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    //this._id = this.route.snapshot.params['id'];
    this.updateContact();
    this.loadContactById();
  }

  loadContactById() {
    this.employeeService
      .getContactById(this._id)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((data: EmployeeResponse) => {
        this.contactdata = data.results.employee;
        this.contactInfoForm.patchValue({
          current_residential_address:
            this.contactdata.current_residential_address,
        });
        this.contactInfoForm.setControl(
          'contacts',
          this.SetExistingContacts(this.contactdata.employeephones || [])
        );
      });
  }

  SetExistingContacts(contactSets: IContact[]): FormArray {
    const formarray = new FormArray([]);
    contactSets.forEach((c) => {
      formarray.push(
        this.fb.group({
          phone_number: c.phone_number,
          phone_type_id: c.phone_type_id,
          is_primary_contact_number: c.is_primary_contact_number,
        })
      );
    });

    return formarray;
  }

  updateContact() {
    this.contactInfoForm = this.fb.group({
      id: [''],
      current_residential_address: ['', [Validators.required]],
      contacts: this.fb.array([this.addContactFormGroup()]),
    });
  }

  addContactFormGroup(): FormGroup {
    return this.fb.group({
      phone_type_id: ['', Validators.required],
      phone_number: ['', [Validators.required, Validators.maxLength(15)]],
      is_primary_contact_number: [''],
    });
  }

  get fc() {
    return this.contactInfoForm.controls;
  }

  public addContactButtonClick() {
    const contacts = this.contactInfoForm.get('contacts') as FormArray;
    contacts.push(this.addContactFormGroup());
  }

  get contacts() {
    return this.contactInfoForm.controls['contacts'] as FormArray;
  }

  getContactsFormArray(): FormArray {
    return this.contactInfoForm.get('contacts') as FormArray;
  }

  getContactFormGroup(i: number): FormGroup {
    return this.getContactsFormArray().controls[i] as FormGroup;
  }

  get contactArray(): FormArray {
    return <FormArray>this.contactInfoForm.get('contacts');
  }

  onSubmitContact() {
    this.isSubmitted = true;

    if (this.contactInfoForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.mapFormValueForContactModel();

    console.log(this.contactdata);

    this.employeeService
      .updateContact(this._id, this.contactdata)
      .subscribe((res) => {
        this.data = res;
      });
  }

  mapFormValueForContactModel() {
    this.contactdata.current_residential_address =
      this.contactInfoForm.value.current_residential_address;
    this.contactdata.employeephones = this.contactInfoForm.value.contacts.map(
      (value) => {
        return {
          phone_type_id: value.phone_type_id,
          is_primary_contact_number: value.is_primary_contact_number,
          phone_number: value.phone_number.e164Number,
        };
      }
    );
  }

  removeOrClearContact(i: number) {

  }
}
