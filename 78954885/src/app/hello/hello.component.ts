import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: '<p>Hello!</p>',
})
export class HelloComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Hello init successful');
  }
}
