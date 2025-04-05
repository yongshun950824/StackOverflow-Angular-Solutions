import { Component, VERSION } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  location: ILocation = {
    name: '',
    messaging: [
      {
        email: {
          fromName: 'No Reply <noreply@example.com>',
          fromAddress: 'noreply@example.com',
        },
      },
    ],
  };

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.location.name, [Validators.required]),
      messaging: new FormArray([
        new FormGroup({
          email: new FormGroup({
            fromName: new FormControl(
              this.location.messaging[0].email.fromName,
              [Validators.required]
            ),
            fromAddress: new FormControl(
              this.location.messaging[0].email.fromAddress,
              [Validators.required]
            ),
          }),
        }),
      ]),
    });
  }

  get messaging(): FormArray {
    return this.form.get('messaging') as FormArray;
  }
}

export interface ILocation {
  name: string;

  messaging: [
    {
      email: {
        fromName: string;
        fromAddress: string;
      };
    }
  ];
}
