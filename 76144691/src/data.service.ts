import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  searchCustomer(res: string) {
    return this.http.get<any[]>('/assets/customers.json').pipe(
      map((customers) =>
        res
          ? customers.filter(
              (x) => x.id.toLowerCase().indexOf(res?.toLowerCase()) > -1
            )
          : customers
      ),
      debounceTime(500)
    );
  }

  searchItem(res: string) {
    return this.http.get<any[]>('/assets/items.json').pipe(
      map((items) =>
        res
          ? items.filter(
              (x) => x.id.toLowerCase().indexOf(res?.toLowerCase()) > -1
            )
          : items
      ),
      debounceTime(500)
    );
  }

  searchTask(res: string) {
    return this.http.get<any[]>('/assets/tasks.json').pipe(
      map((tasks) =>
        res
          ? tasks.filter(
              (x) => x.id.toLowerCase().indexOf(res?.toLowerCase()) > -1
            )
          : tasks
      ),
      debounceTime(500)
    );
  }
}
