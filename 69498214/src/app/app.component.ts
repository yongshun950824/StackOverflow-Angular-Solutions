import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  mycheckbox: boolean = false;
  mycheckboxWithStringValue: string = '';

  ngOnInit() {
    // Init mycheckboxWithStringValue
    this.change();
  }

  change() {
    this.mycheckboxWithStringValue = this.mycheckbox ? 'CB_OUI' : 'CB_NON';
  }
}
