import { Component, OnInit } from '@angular/core';

interface City {
  name: string;
  code: string;
}

export enum Cars {
  VOLVO = 'Volvo',
  AUDI = 'Audi',
  VOLKSWAGEN = 'Volkswagen',
  NISSAN = 'Nissan',
}

@Component({
  selector: 'dropdown-basic-demo',
  templateUrl: './dropdown-basic-demo.html',
})
export class DropdownBasicDemo implements OnInit {
  cities: City[] | undefined;

  selectedCity: City | undefined;

  carlist = Cars;
  carlist2: any[] = Object.entries(Cars).map((v, k) => ({ key: k, value: v }));
  car: any = { name: '' };

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  unsort = (a, b) => 0;
}
