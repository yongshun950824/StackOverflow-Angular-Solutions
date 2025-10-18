import { Component, OnInit, ViewChild } from '@angular/core';
import { ImportsModule } from './imports';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';
@Component({
  selector: 'table-multiple-columns-sort-demo',
  templateUrl: 'table-multiple-columns-sort-demo.html',
  standalone: true,
  imports: [ImportsModule],
  providers: [ProductService],
})
export class TableSingleColumnsSortDemo implements OnInit {
  permissions: Product[];
  @ViewChild('tableDt ') table!: Table;

  multiSortMeta: any[] = [{ field: 'isTicked', order: -1 }];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.permissions = data;
    });
  }

  onRowChecked(name: string) {
    const element = this.permissions.find((x) => x.name == name);
    element.isTicked = !element.isTicked;

    this.permissions = [...this.permissions];
  }
}
