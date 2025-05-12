import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[];

  constructor() {
    this.products = [
        {
          id: "1",
          name:"Mac Book Pro"
        },
        {
          id: "2",
          name:"iPhone"
        }
    ];
  }

  public getProducts(){
    return this.products;
  }


  ngOnInit(): void {
  }

}