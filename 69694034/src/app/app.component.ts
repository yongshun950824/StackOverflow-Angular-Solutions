import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  constructor() {}
  ngOnInit(): void {
    this.updateName('First New Name!');

    of('Second New Name!')
      .pipe(delay(1500))
      // .subscribe(name => this.updateName(name)); // Works!
      .subscribe(this.updateName); // Doesn't work // Error: Cannot set properties of undefined (setting 'message')
  }

  updateName = (name: string) => {
    this.name = name;
  };
}
