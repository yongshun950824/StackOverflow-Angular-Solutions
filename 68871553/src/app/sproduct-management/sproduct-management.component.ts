import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import {
  NgbdSortableHeader,
  SortEvent
} from '../directives/sortable.directive';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-sproduct-management',
  templateUrl: './sproduct-management.component.html',
  styleUrls: ['./sproduct-management.component.css']
})
export class SProductManagementComponent {
  products$: Observable<Product[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: ProductService) {
    this.products$ = service.products$;
    this.total$ = service.total$;
    this.headers = new QueryList();
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
