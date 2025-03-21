import { Component, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lozana';

  data: any[] = [];
  filteredData: any[] = [];

  eKotlarnica = this.formBuilder.group({
    lozac: '',
    broj: '',
    vreme: '',
  });
  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    console.warn('Kotao je nalozen', this.eKotlarnica.value);
    this.data.push(this.eKotlarnica.value);
    this.filteredData = this.data;
    this.eKotlarnica.reset();
  }
  onChange(event: any) {
    this.filterLozac(event.target.value);
    console.log(event.target.value);
  }
  filterLozac(imeLozaca: any) {
    this.filteredData = this.data.filter(function (red) {
      console.log(red);
      return imeLozaca == red.lozac;
    });
  }
}
