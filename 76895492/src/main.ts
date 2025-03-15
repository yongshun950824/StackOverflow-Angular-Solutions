import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { map, Observable, share, shareReplay } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div *ngIf="users$ | async">
  <li *ngFor="let item of users$ | async">
    {{ item.name }}
  </li>

  <li *ngFor="let item of users$ | async">
    {{ item.name }}
  </li>

  <li *ngFor="let item of users$ | async">
    {{ item.name }}
  </li>
</div>

  `,
})
export class App {
  name = 'Angular';

  users$: Observable<any> = ajax(
    'https://jsonplaceholder.typicode.com/users'
  ).pipe(
    map((res: any) => res?.response),
    shareReplay()
  );

  /*
  ngOnInit() {
    this.users$ = ajax(
      'https://jsonplaceholder.typicode.com/users'
    ).pipe(
      map((res: any) => res?.response),
      share()
    );
  }
  */
}

bootstrapApplication(App);
