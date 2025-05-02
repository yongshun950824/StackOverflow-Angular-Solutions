import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dynamic-grid',
  templateUrl: './dynamic-grid.component.html',
  styleUrls: ['./dynamic-grid.component.css']
})
export class DynamicGridComponent implements OnInit {
  products: Product[] = [];
  cols: any[] = [];

  value: any = null;

  @ViewChild('dt1') dt!: Table;

  constructor(private productService: ProductService) {}

  applyFilter($event: any, field: string, matchMode: string) {
    console.log($event.target as HTMLInputElement);
    let value = ($event.target as HTMLInputElement)?.value;
    this.dt.filter(value, field, matchMode);
  }

  ngOnInit() {
    this.productService.getProductsSmall().then(data => (this.products = data));

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ];
  }
}
