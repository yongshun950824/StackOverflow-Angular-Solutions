import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
//import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  //apiURLOrders = environment.apiUrl + 'orders';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    //return this.http.get<Order[]>(this.apiURLOrders);
    return this.http.get<Order[]>('assets/data.json');
  }
}
