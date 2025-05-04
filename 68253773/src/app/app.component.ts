import { Component, VERSION, OnInit } from '@angular/core';
import * as _moment from 'moment';
import { Moment } from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const moment = _moment;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userInfoForm!: FormGroup;
  companyInfoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      otherName: ['']
    });

    this.companyInfoForm = this.fb.group({
      dateEstablished: ['', Validators.required]
    });
  }

  onSubmit() {
    const formUserData = this.userInfoForm.getRawValue();
    const formCompanyData = this.companyInfoForm.getRawValue();

    let dateEstablished: Moment = formCompanyData.dateEstablished;

    const data = {
      dateEstablished: dateEstablished.format("YYYY-MM-DD"),
      firstName: formUserData.firstName,
      lastName: formUserData.lastName,
      otherName: formUserData.otherName
    };

    console.log(data);
  }

  get fc() {
    return this.companyInfoForm.controls;
  };
  get fu() {
    return this.userInfoForm.controls;
  };
}
