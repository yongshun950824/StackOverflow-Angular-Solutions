import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-view-product-page',
  templateUrl: './view-product-page.component.html',
  styleUrls: ['./view-product-page.component.css']
})
export class ViewProductPage implements OnInit {
  product: IProduct;

  constructor(private service: CustomerService) {}

  ngOnInit() {
    this.service.getProduct().subscribe((data: any) => {
      this.product = data;
      console.log(this.product);
    });
  }
}
