import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  keywords: KeywordDto[] = [
    {
      name: 'Root Level 1',
      children: [{ name: 'Level 2', children: [{ name: 'Level 3' }] }],
    },
  ];
}

export interface KeywordDto {
  children?: null | Array<KeywordDto>;
  id?: number;
  name?: null | string;
  parent?: KeywordDto;
}
