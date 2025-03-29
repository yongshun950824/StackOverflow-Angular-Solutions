import { Component, VERSION } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookingService],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  bookAdd: Booking[] = [];
  booksSelected: any[] = [];
  total = 0;

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService.getBooking().subscribe((data) => {
      this.bookAdd = data;
      console.log(this.bookAdd);

      this.booksSelected = data.map((x: any) => {
        x.priceSelected = x.price.reduce((acc, cur) => {
          let keyIndex = Object.keys(acc).length;

          acc[keyIndex] = 0;

          return acc;
        }, {});

        x.subTotal = 0;

        return x;
      });
    });
  }

  addTotalPrice(price: number) {
    this.total += price;
  }

  addBookings(name: string, i: number, price: number) {
    let index = this.booksSelected.findIndex((x) => x.name == name);
    this.booksSelected[i].priceSelected[i] += 1;
    this.booksSelected[i].subTotal += price;
  }

  get bookingsTotal() {
    return this.booksSelected.reduce((prev, cur) => {
      prev += cur.subTotal;

      return prev;
    }, 0);
  }
}
