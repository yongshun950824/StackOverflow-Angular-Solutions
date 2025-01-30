import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'core',
  template: `
    <div>
      <p>
        <a [routerLink]="[{ outlets: { dialog: ['entity', 'hello'] } }]">
          Click to say hello
        </a>
      </p>
    </div>
    `,
})
export class CoreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
