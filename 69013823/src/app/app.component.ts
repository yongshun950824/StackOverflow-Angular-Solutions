import { AfterViewInit, Component, VERSION, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rows: any[] = [];

  constructor() {
    this.getData().subscribe((data: any[]) => {
      this.rows = data;
    });

    // POC to pass string value to ColumnMode
    let mode: ColumnMode | keyof typeof ColumnMode;
    mode = 'force'; // OK
    //mode = "none";  // Uncomment this will get Type '"none"' is not assignable to type 'ColumnMode | "standard" | "flex" | "force"'.
  }

  getData(): Observable<any[]> {
    return of([
      {
        name: 'Ali',
        age: 21,
        gender: 'Male'
      },
      {
        name: 'Mary',
        age: 30,
        gender: 'Female'
      },
      {
        name: 'Chan',
        age: 12,
        gender: 'Male'
      },
      {
        name: 'Olivia',
        age: 33,
        gender: 'Feale'
      },
      {
        name: 'Luis',
        age: 58,
        gender: 'Male'
      }
    ]);
  }
}
