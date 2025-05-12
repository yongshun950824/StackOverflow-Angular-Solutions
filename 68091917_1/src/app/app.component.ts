import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  seasons: any[] = [
    {
      id: 1,
      image: {
        medium: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAEBr6pllmaTMP5nzY82qniEXe2y21Chm9NA&usqp=CAU'
      }
    },
    {
      id: 2,
      image: null
    }
  ];
}
