import { Component, VERSION } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  public loggedInUserData = new ReplaySubject<IPerson>();

  public profiles$: Observable<IPerson[]> = this.loggedInUserData
    .asObservable()
    .pipe(scan((acc, curr) => [...acc, curr], []));

  //.subscribe((res) => {
  //  return res;
  // });

  ngOnInit() {
    this.loggedInUserData.next({
      name: 'User A',
      email: 'usera@gmail.com',
      passwort: '123456',
    });

    this.loggedInUserData.next({
      name: 'User B',
      email: 'userb@gmail.com',
      passwort: '123456',
    });
  }
}

export interface IPerson {
  name: string;
  email: string;
  passwort: string;
}
