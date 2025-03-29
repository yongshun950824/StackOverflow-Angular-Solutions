import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  showForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.showForm = this.fb.group({
      //...
      imdb: ['', [Validators.required, Validators.pattern('^tt\\d{1,}$')]],
      //...
    });
  }
}
