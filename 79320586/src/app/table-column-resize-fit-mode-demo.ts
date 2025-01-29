import { Component, OnInit } from '@angular/core';
import { ImportsModule } from './imports';
import { Product } from '@/domain/product';
import { ProductService } from '../service/productservice';
@Component({
    selector: 'table-column-resize-fit-mode-demo',
    templateUrl: 'table-column-resize-fit-mode-demo.html',
    standalone: true,
    imports: [ImportsModule],
    providers: [ProductService],
    styles: [
        `
        .source-code {
            cursor: zoom-in;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 10rem;
          }
        `
    ]
})
export class TableColumnResizeFitModeDemo implements OnInit{
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}