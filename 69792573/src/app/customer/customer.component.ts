import { Component, OnInit } from '@angular/core';
// import { ServicesService } from 'src/app/services.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  op: any = [];

  objectOptions: any;
  checkforcustomer: any;
  options: any[] = [];
  isSubmitted = false;
  customerName: any;
  customerResponse: any;
  constructor(
    public fb: FormBuilder // ,public service:ServicesService
  ) {}
  customerdetailForm = this.fb.group({
    customername: ['', [Validators.required]],
  });

  filteredOptions: Observable<any[]> | undefined;

  ngOnInit(): void {
    // this.service.fetchDefaultCustomerdetails().subscribe((res) => {
    //   this.customerResponse=res[0]
    //   console.log('Customer Details here',this.customerResponse)
    // })
    // this.onSubmit();\
    this.options = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
          geo: {
            lat: '-43.9509',
            lng: '-34.4618',
          },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
          catchPhrase: 'Proactive didactic contingency',
          bs: 'synergize scalable supply-chains',
        },
      },
    ];
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value))
    );
  }

  myControl = new FormControl();

  // filteredOptions: Observable<string[]> | undefined
  onSubmit() {
    this.isSubmitted = true;
    this.customerName = 'customername:' + this.checkforcustomer;
    console.log('cutomer name provided', this.customerName);
    // this.service.fetchCustomerdetails(this.customerName).subscribe((res) => {
    //   this.customerResponse = res[0];
    //   console.log('Customer Details here', this.customerResponse);
    // });
  }

  displayFn(subject: any) {
    console.log('subject', subject);
    return subject ? subject.name : undefined;
  }

  private _filter(value: string): any[] {
    console.log('ss', value);
    const filterValue = value.toString().toLowerCase();
    return this.options.filter((option: { name: { toString: () => string } }) =>
      option.name.toString().toLowerCase().includes(filterValue)
    );
  }

  onChange(deviceValue: any) {
    this.checkforcustomer = deviceValue;
    console.log('customerName', this.checkforcustomer);
  }

  type(value: any){
    return typeof(value);
  }
}
