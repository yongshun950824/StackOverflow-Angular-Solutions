import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    PaymentInfoComponent,
    ConfirmationComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
