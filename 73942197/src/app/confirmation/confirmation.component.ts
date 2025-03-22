import { Component, OnInit } from '@angular/core';
import { PaymentInfoService } from '../services/payment-info.service';
import { Payment } from '../shared/models/Payment';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  payment!: Payment;
  constructor(private paymentInfoService: PaymentInfoService) {}

  ngOnInit(): void {
    this.updatePaymentInfo();

    // Work with Subject/BehaviorSubject
    // this.paymentInfoService
    //   .getPaymentInfoSubject()
    //   .subscribe((x) => (this.payment = x));
  }

  updatePaymentInfo() {
    this.payment = this.paymentInfoService.getPaymentInfo();
  }
}
