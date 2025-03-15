import { Component, VERSION } from '@angular/core';
import { Dropdown} from 'bootstrap'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  
  toggle(modalElement){
    const modal=new Dropdown(modalElement);
    modal.toggle();
  }
  
}
