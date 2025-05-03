import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Observable<Product[]> {
    let products: Product[] = [
      {
        //id: 1,
        name: 'Product A',
        description: 'Product A desc.',
        category: 'Cat. A',
        quantity: 20,
        price: 100
      },
      {
        //id: 2,
        name: 'Product B',
        description: 'Product B desc.',
        category: 'Cat. B',
        quantity: 80,
        price: 50
      }
    ];

    return of(products);
  }

  getProductsSmall(): Promise<any> {
    return this.getProducts().toPromise();
  }
}
