import { Component, VERSION } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  options: any[] = [
    { label: 'Label 1', name: 'Name 1', value: 1 },
    { label: 'Label 2', name: 'Name 2', value: 2 },
  ];

  selectedOption: FormControl = new FormControl('');
  selectedOptionObj: any;

  onSelectOption(event: any) {
    let selectedValue = event.value;

    this.selectedOptionObj = this.options.find((x) => x.value == selectedValue);
  }
}
