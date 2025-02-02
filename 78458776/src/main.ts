import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],
})
export class App {
  name = 'Angular';

  personelForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  reloadForm() {
    this.personelForm = this.fb.group({
      isCheck: new FormControl(false),
      phone: new FormControl(0),
      name: new FormControl(''),
      surname: new FormControl(''),
    });

    // Alternative
    // this.personelForm.get('isCheck')!.valueChanges.subscribe((isCheck) => {
    //   if (isCheck) this.personelForm.get('phone')!.disable();
    //   else this.personelForm.get('phone')!.enable();
    // });
  }

  ngOnInit() {
    this.reloadForm();
  }
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});
