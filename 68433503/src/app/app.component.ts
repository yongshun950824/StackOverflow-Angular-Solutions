import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import * as moment from 'moment';
import { OwlDateTimeIntl } from 'ng-pick-datetime';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //public dateFrom = '21/06/2019 22:22:45';
  public dateFrom = new Date();
  itineraryrForm: FormGroup;
  arrivalTime = new FormControl();

  constructor(
    private owlDateTimeIntl: OwlDateTimeIntl,
    private formBuilder: FormBuilder
  ) {
    this.loadBtnI18n();
  }

  ngOnInit() {
    this.itineraryrForm = this.formBuilder.group({
      arrivalTime: new FormControl('01/01/2021 23:00', [Validators.required])
    });

    this.initialize();
  }

  public changeDate(e: any) {
    console.log(e.input.value);
  }

  public loadBtnI18n(): void {
    this.owlDateTimeIntl.setBtnLabel = 'Thiết Lập';
    this.owlDateTimeIntl.cancelBtnLabel = 'Thoát';
  }

  get f() {
    return this.itineraryrForm.controls;
  }

  initialize() {
    //string to Date works!
    this.itineraryrForm.setValue({
      arrivalTime: new Date("01/01/2021 23:00")
    });

    // Use string to Moement also works!
    this.itineraryrForm.setValue({
      arrivalTime: moment("01/01/2021 23:00", "DD/MM/YYYY HH:mm")
    });
  }
}
