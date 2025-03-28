import { Component, OnInit, VERSION } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public form: FormGroup;
  //public name: AbstractControl;
  public totalStudents: any = [
    {
      name: 'Sandro',
      rol: 'student',
    },
    {
      name: 'Paola',
      rol: 'student',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.start();
  }

  start() {
    this.form = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          //this.validateName
        ]),
      ],
    });
  }

  private validateName(control: AbstractControl): ValidationErrors | null {
    const names = this.totalStudents;
    let compareName;

    names.map((value) => {
      compareName = value.name;
    });

    return compareName.test(control.value)
      ? null
      : {
          validateName: {
            valid: false,
          },
        };
  }

  get name(): AbstractControl {
    return this.form.controls.name as FormControl;
  }
}
