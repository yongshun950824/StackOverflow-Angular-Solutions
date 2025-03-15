import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;

  // onlyCountries: CountryISO[] = Object.keys(CountryISO)
  //   .filter((x) => CountryISO[x] != CountryISO.Mexico)
  //   .map((x) => CountryISO[x]);

  onlyCountries: CountryISO[] = Object.keys(CountryISO)
    .filter(
      (x) =>
        ![CountryISO.Mexico /* Other CountryISO */].some(
          (y) => y == CountryISO[x]
        )
    )
    .map((x) => CountryISO[x]);

  ngOnInit() {
    console.log(this.onlyCountries);
  }
}
