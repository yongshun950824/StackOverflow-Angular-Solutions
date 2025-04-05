import { Component, VERSION } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  breeds$: Observable<RootObject[]> = of([
    {
      weight: {
        imperial: '7  -  10',
        metric: '3 - 5',
      },
      id: 'abys',
      name: 'Abyssinian',
      image: {
        id: '0XYvRd7oD',
        width: 1204,
        height: 1445,
        url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
      },
    },
  ]);
}

export interface RootObject {
  weight: {
    imperial: string;
    metric: string;
  };
  id: string;
  name: string;
  image: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
}
