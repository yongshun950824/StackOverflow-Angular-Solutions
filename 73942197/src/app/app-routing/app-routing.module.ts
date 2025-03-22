import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaymentInfoComponent } from '../payment-info/payment-info.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { AppComponent } from '../app.component';

const ROUTES: Routes = [
  {
    path: 'payment-info',
    component: PaymentInfoComponent,
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
