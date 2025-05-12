import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products$: Observable<any>;
  total$: Observable<any>;

  sortColumn: any;
  sortDirection: any;

  searchTerm: string;

  page: number;
  pageSize: number;

  loading$: Observable<boolean>;
}
