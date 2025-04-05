import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { COUNTRY, COUNTRY_CODE } from './country';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  countryCodeList: COUNTRY[] = COUNTRY_CODE;
  filteredCountries!: Observable<COUNTRY[]>;

  DialCode: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.DialCode = this.fb.group({
      countryCode: [],
    });

    this.filteredCountries = of(this.countryCodeList);
  }

  parse(countryCode: string) {}
}
