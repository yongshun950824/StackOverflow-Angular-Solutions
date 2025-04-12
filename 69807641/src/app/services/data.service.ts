import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getProjectData() {
    return of([
      {
        project_name_jp: 'Project 1',
        business_divition: 'Division 1',
        rank: 'A',
        order_amount: 100,
        customer_area: 'Area 1',
      },
      {
        project_name_jp: 'Project 2',
        business_divition: 'Division 2',
        rank: 'B',
        order_amount: 200,
        customer_area: 'Area 2',
      },
      {
        project_name_jp: 'Project 3',
        business_divition: 'Division 3',
        rank: 'C',
        order_amount: 1000,
        customer_area: 'Area 3',
      },
    ]);
  }
}
