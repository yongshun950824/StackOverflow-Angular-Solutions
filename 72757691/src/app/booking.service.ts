import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking.model';

@Injectable()
export class BookingService {
  constructor(private http: HttpClient) {}

  getBooking(): Observable<Booking[]> {
    return this.http.get<Booking[]>('/assets/booking.json');
  }
}
