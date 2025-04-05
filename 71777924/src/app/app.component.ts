import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  form: FormGroup;

  workStatus: any[] = ['WORK', 'RELEASE', 'OPEN'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      workingStatus: [''],
      getWorkDate: [],
    });
  }

  onDropdownChange(value) {
    console.log(value);

    if (value == 'RELEASE')
    this.form.controls["getWorkDate"].setValue(new Date());
  }
}
