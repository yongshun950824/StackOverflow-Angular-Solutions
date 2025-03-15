import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSnackBarModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, LoginFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
