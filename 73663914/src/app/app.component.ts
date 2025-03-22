import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  name = true;
  des = true;
  photo = true;
  getParamId = false;
  images = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      id: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(9),
          Validators.pattern('[0-9]+'),
        ],
      ],
      name: [''],
    });
  }

  get idHasError() {
    return this.userForm.controls.id.errors;
  }

  userSubmit() {
    console.log(this.userForm.get('image')?.value);
    console.log(this.userForm.value);
    const formData = new FormData();
    formData.append('image', this.images);
    formData.append('id', this.userForm.value.id);
    formData.append('des', this.userForm.value.des);
    formData.append('name', this.userForm.value.name);

    console.log(typeof this.userForm.value.id);
    // if (
    //   this.userForm.value.id.length < 6 ||
    //   this.userForm.value.id.length > 9
    // ) {
    //   console.log('length error');
    // }
  }
}
