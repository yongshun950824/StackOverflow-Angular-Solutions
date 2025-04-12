import { Component, VERSION } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  newDeviceGroup!: FormGroup;
  isDeviceWork: boolean = false;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.newDeviceGroup = this.builder.group({
      isDeviceWork: new FormControl('')
    });
  }

  onSubmit() {

  }

  onCheckChange(event: any) {
    this.newDeviceGroup.markAsTouched();
  }
}
