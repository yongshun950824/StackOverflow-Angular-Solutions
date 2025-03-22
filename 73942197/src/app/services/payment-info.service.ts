import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Payment } from '../shared/models/Payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentInfoService {
  paymentInfo: Payment = new Payment();

  // Work with Subject/BehaviorSubject
  // paymentInfo$: BehaviorSubject<Payment | null> = new BehaviorSubject(null);

  setPaymentInfo(
    cardHolder: String,
    cardNumber: String,
    cvv: String,
    expirationDate: String
  ) {
    this.paymentInfo.cardNumber = cardNumber;

    // Work with Subject/BehaviorSubject
    // this.paymentInfo$.next(this.paymentInfo);
  }

  getPaymentInfo() {
    return this.paymentInfo;
  }

  // Work with Subject/BehaviorSubject
  // getPaymentInfoSubject() {
  //   return this.paymentInfo$;
  // }
}
