import { Component, OnInit } from '@angular/core';

interface Country {
  name: string;
  code: string;
}

@Component({
  selector: 'multi-select-template-demo',
  templateUrl: './multi-select-template-demo.html',
})
export class MultiSelectTemplateDemo implements OnInit {
  countries!: Country[];
  filteredCountryList!: Country[];

  selectedCountries!: Country[];

  constructor() {
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ];

    this.filteredCountryList = [...this.countries];
  }

  ngOnInit() {}

  onFilter(event: any) {
    if (event) {
      this.filteredCountryList = this.countries.filter((customer) =>
        customer.name.toLowerCase().includes(event.filter.toLowerCase())
      );

      console.log(this.filteredCountryList);
      console.log(this.filteredCountryList.length);
    }
  }
}
