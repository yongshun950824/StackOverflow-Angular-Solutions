import { Component, ViewChild } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import 'zone.js';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [FormsModule, JsonPipe],
})
export class App {
  name = 'Angular';

  @ViewChild('form') form!: NgForm;

  selectedLocker = {
    lockeruseremail: '',
  };

  submit() {
    if (!this.form.valid) {
      alert('Form value invalid Detected!');
      return;
    }

    console.log(this.form);
  }
}

bootstrapApplication(App);
