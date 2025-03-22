import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentInfoService } from '../services/payment-info.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css'],
})
export class PaymentInfoComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private paymentInfoService: PaymentInfoService,
    private router: Router
  ) {}

  paymentInfo = this.paymentInfoService.getPaymentInfo();

  checkoutForm = this.formBuilder.nonNullable.group({
    cardNumber: '',
  });

  ngOnInit(): void {}

  onSubmit(): void {
    this.setData(this.checkoutForm.value.cardNumber!);

    this.router.navigate(['/confirmation']);
  }

  setData(cardNumber: string) {
    this.paymentInfoService.setPaymentInfo('', cardNumber, '', '');
  }
}
