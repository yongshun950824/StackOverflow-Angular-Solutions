import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myForm: FormGroup;

  mainObject = {
    adminname: 'Saqib',
    adminemail: 'email@example.com',
    users: [
      { user_type: 'Adult', count: 3 },
      { user_type: 'Child', count: 1 },
      { user_type: 'infant', count: 0 },
    ],
  };
  // I want to Show forms according to this users count with their Type:
  // according to this data there should be 3 adult forms, 1 hchild form and no infant Form.

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.myForm = this.fb.group({
      name: '',
      admin_email: '',
      users: this.fb.array(
        this.toFormUsers(this.mainObject.users).map((e) => this.newUsers(e.user_type, e.count))
      ),
    });
  }

  get users(): FormArray {
    return this.myForm.get('users') as FormArray;
  }

  newUsers(t, c): FormGroup {
    console.log(t, c);
    return this.fb.group({
      user_type: t,
      user_name: '',
      user_email: '',
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

  toFormUsers(users: any[]): any[] {
    // Generate array by user_type
    let userTypeGroup = users.reduce((accumulator, current) => {
      accumulator[current.user_type] = accumulator[current.user_type] || [];

      for (let i = 0; i < current.count; i++)
        accumulator[current.user_type].push({ user_type: current.user_type });

      return accumulator;
    }, {});

    // Flatten array of array for userTypeGroup
    return [].concat(
      ...Object.keys(userTypeGroup).map((x) => userTypeGroup[x])
    );
  }
}
