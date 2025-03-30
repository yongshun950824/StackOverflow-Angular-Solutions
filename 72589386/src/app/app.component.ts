import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  items = ['Value 1', 'Value 2', 'Value 3'];
  selectedOption: string;

  selectedValue() {
    this.updateValue(this.selectedOption);
  }

  updateValue(t) {
    console.log(t);
  }
}
