import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  item = {
    id: 1,
  };

  clickItem(item): void {
    console.log(item);
    console.log(item.attributes['data-itemid'].value);
    // using $event then .getAttribute() doesn't seem to be practical since it's sending
    // the child element's event on click
  }
}
