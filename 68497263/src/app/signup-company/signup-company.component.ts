import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat
} from 'ngx-intl-tel-input';
import { first } from 'rxjs/dist/types';

@Component({
  selector: 'app-signup-company',
  templateUrl: './signup-company.component.html',
  styleUrls: ['./signup-company.component.css']
})
export class SignupCompanyComponent implements OnInit {
  isLinear = true;
  isLoading = false;
  companySetupForm!: FormGroup;
  companyForm!: FormGroup;
  idForm!: FormGroup;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom
  ];
  isSubmitted: boolean;

  constructor(private fb: FormBuilder) {}

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  ngOnInit() {
    this.companyForm = this.fb.group(
      {
        companyName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100)
          ]
        ],
        mobileNumber: ['', [
          Validators.required
        ]]
      },
      {
        updateOn: 'blur'
      }
    );
    this.idForm = this.fb.group({
      registrationNumber: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  get fc() {
    return this.companyForm.controls;
  }
  get fi() {
    return this.idForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;

    const formCompanyData = this.companyForm.getRawValue();
    const formIdData = this.idForm.getRawValue();

    const data = {
      companyName: formCompanyData.companyName,
      mobileNumber: formCompanyData.mobileNumber,
      registrationNumber: formCompanyData.registrationNumber
    };

    // this.spinnerService.show();
    const header = {
      'Content-Type': 'application/json'
    };

    this.isLoading = true;
    // return this.api.post('signup', data, header)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.tokenHandler(data);
    //     });
  }
}
