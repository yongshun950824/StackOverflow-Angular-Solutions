import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, NgModel } from "@angular/forms";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  //MyProfileForm: FormGroup;
  People: { selfnickname: string } = {
    selfnickname: ""
  };

  // MyProfileForm: FormGroup = this.fbdr.group({
  //   nickname: new FormControl(this.People.selfnickname, [
  //     Validators.required,
  //     Validators.minLength(4)
  //   ])
  // });

  constructor() {}

  ngOnInit() {}
}
