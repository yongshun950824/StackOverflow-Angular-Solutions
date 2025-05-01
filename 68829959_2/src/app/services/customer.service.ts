import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getProduct(): Observable<IProduct> {
    const product: IProduct = {
      productID: '1',
      productImage: 'img1.png',
      productName: 'Item 1',
      productDescription: 'Item 1',
      productRating: 4,
      productPrice: 52
    };

    return of(product).pipe(delay(5000));
  }
}
