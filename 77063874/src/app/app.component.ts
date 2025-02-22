import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  s: string = 'optionB';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      radioOption: ['optionA'], // Set the initial value to 'optionA'
      selectedFood: ['Peach'], // Set the initial value to 'Peach'
    });
    this.form.patchValue({
      selectedFood: '',
    });
  }

  setPeachValue() {
    // Set the value to 'Peach' using patchValue
    console.log('setting value');
    this.form.patchValue({
      selectedFood: 'Peach',
      radioOption: 'optionA',
    });
  }

  get radioOption() {
    return this.form.get('radioOption')!;
  }
}
