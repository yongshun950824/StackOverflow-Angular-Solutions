import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'Incorrect credentials';
  message = 'This password do not match any credentials';
  isError = false;

  constructor() {}

  ngOnInit() {}

  submit() {
    console.log("submit")
    this.isError = true;
  }
}
