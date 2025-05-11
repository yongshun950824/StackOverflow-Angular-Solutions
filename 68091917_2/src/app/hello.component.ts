import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: `hello.component.html`,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
      img {
        width: 100px;
        height: 100px;
      }
    `
  ]
})
export class HelloComponent {
  seasonsdetail: any = {
    season: [
      {
        number: 1,
        image: {
          medium:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAEBr6pllmaTMP5nzY82qniEXe2y21Chm9NA&usqp=CAU'
        }
      },
      {
        number: 2,
        image: null
      }
    ]
  };
}
