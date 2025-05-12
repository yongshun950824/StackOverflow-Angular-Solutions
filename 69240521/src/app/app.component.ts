import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  myForm = new FormGroup({
    user: new FormControl(null),
  });
  currentUser = { id: 5, name: 'Chelsey Dietrich' };
  user;

  constructor(private _httpClient: HttpClient) {}

  ngOnInit() {
    this._httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((users: any) => {
          return users.map((item) => {
            return { id: item.id, name: item.name };
          });
        })
      )
      .subscribe((data) => {
        console.log(data);
        this.user = data;
        // const findIndex = this.user.findIndex(
        //   (item) => item.id == this.currentUser.id
        // );
        // this.myForm.get('user').patchValue(this.user[findIndex]);
        this.myForm.get('user').patchValue(this.currentUser);
      });
  }

  compare(val1, val2) {
    return val1.id === val2.id;
  }
}
