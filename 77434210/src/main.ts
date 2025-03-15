import 'zone.js/dist/zone';
import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
} from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
  ],
  template: `
    <div class="flex justify-content-center">
      <form [formGroup]="registerForm" class=" m-2">
        <div class=" p-inputgroup mb-2 mt-2">
          <span class="p-inputgroup-addon">
              <i class="pi pi-user"></i>
          </span>
          <input pInputText formControlName="name" placeholder="Nombre" />

        </div>
        <div class="p-inputgroup mb-2 mt-2">
            <span class="p-inputgroup-addon">
              <i class="pi pi-envelope"></i>
            </span>
            <input type="text" pInputText formControlName="email" placeholder="Correo" />
            
        </div>
        <div class="p-inputgroup mb-2 mt-2">
            <span class="p-inputgroup-addon">
              <i class="pi pi-lock"></i>
            </span>
            <p-password  [toggleMask]="true" formControlName="password" ></p-password>
          </div>
        <div class=" p-inputgroup mb-2 mt-2">
        <span class="p-inputgroup-addon">
            <i class="pi pi-check"></i>
          </span>

          <p-password  [toggleMask]="true" formControlName="passwordConfirm" ></p-password>

        </div>
        <div class="flex justify-content-center">
          <p-button label="Submit" (onClick)="onSubmit()"></p-button>
      </div>

      <p-password  [toggleMask]="true" formControlName="passwordConfirm" ></p-password>

      </form>
    </div>
  `,
})
export class App {
  name = 'Angular';

  registerForm = new UntypedFormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    passwordConfirm: new FormControl(),
  });

  onSubmit() {}
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});
