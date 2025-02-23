import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { provideAnimations } from '@angular/platform-browser/animations';
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TableModule],
  template: `
  <div class="card">
  <p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template pTemplate="header">
      <tr>
        <th>Code</th>
        <th>Name</th>
        <th>Category</th>
        <th>Quantity</th>
      </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
      <tr [ngClass]="myRowClass(product.version)">
        <td>{{ product.code }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.quantity }}</td>
      </tr>
    </ng-template>
  </p-table>
</div>
  `,
})
export class App {
  name = 'Angular';

  products = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      version: 1,
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4,
      version: 3,
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'Product Description',
      image: 'blue-band.jpg',
      price: 79,
      category: 'Fitness',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3,
      version: 5,
    },
    {
      id: '1003',
      code: '244wgerg2',
      name: 'Blue T-Shirt',
      description: 'Product Description',
      image: 'blue-t-shirt.jpg',
      price: 29,
      category: 'Clothing',
      quantity: 25,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      version: 2,
    },
    {
      id: '1004',
      code: 'h456wer53',
      name: 'Bracelet',
      description: 'Product Description',
      image: 'bracelet.jpg',
      price: 15,
      category: 'Accessories',
      quantity: 73,
      inventoryStatus: 'INSTOCK',
      rating: 4,
      version: 7,
    },
  ];

  public myRowClass(v) {
    return v < 3 ? 'greenBkg' : v < 5 ? 'yellowBkg' : 'redBkg';
  }
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});
