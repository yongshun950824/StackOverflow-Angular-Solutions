import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [FormsModule, ReactiveFormsModule],
})
export class App {
  name = 'Angular';

  checkoutForm!: FormGroup;
  public cart: any;

  ngOnInit() {
    this.checkoutForm = new FormGroup({
      deliveryAddress: new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        phone: new FormControl(''),
        address1: new FormControl(''),
        address2: new FormControl(''),
        useAsBillingAddress: new FormControl(''),
      }),
      applianceDelivery: new FormGroup({
        deliveryDate: new FormControl(''),
        specialInstructions: new FormControl(''),
      }),
      paymentMethod: new FormGroup({
        // paymentType: 'new FormControl(Credit Card'),
        cardNumber: new FormControl(''),
        expMonth: new FormControl(''),
        expYear: new FormControl(''),
        CVV: new FormControl(''),
        defaultCreditCard: new FormControl(''),
      }),
    });

    console.log('this.checkoutForm', this.checkoutForm.value);

    // this.initCheckoutForm();
  }

  saveToDataStore() {}
}

bootstrapApplication(App);
