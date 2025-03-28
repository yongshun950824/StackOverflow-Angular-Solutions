import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  actionUpload: number = 1;

  constructor() {
    //some code here
  }
  ngOnInit() {
    //some code here
  }

  choose(upT: number) {
    this.actionUpload = upT;
  }
}
