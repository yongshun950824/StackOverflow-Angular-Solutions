import { Component, VERSION, ViewChild, ElementRef } from '@angular/core';
import { MatRadioGroup } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  selected = false;

  constructor() {}

  

toggleSelection() {
    this.selected = !this.selected;
  }
  
}
