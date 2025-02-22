import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { ChangeDetectionStrategy } from '@angular/core';

const ELEMENT_DATA: any[] = [
  { id: 1, name: 'Hydrogen', weight: 1.0079, material: 'Cotton' },
  { id: 2, name: 'Helium', weight: 4.0026, material: 'Concrete' },
  { id: 3, name: 'Lithium', weight: 6.941, material: 'Cotton' },
  { id: 4, name: 'Beryllium', weight: 9.0122, material: 'Cotton' },
  { id: 5, name: 'Boron', weight: 10.811, material: 'Concrete' },
  { id: 6, name: 'Carbon', weight: 12.0107, material: 'Concrete' },
  { id: 7, name: 'Nitrogen', weight: 14.0067, material: 'Cotton' },
  { id: 8, name: 'Oxygen', weight: 15.9994, material: 'Concrete' },
  { id: 9, name: 'Fluorine', weight: 18.9984, material: 'Concrete' },
  { id: 10, name: 'Neon', weight: 20.1797, material: 'Concrete' },
  { id: 11, name: 'Sodium', weight: 22.9897, material: 'Cotton' },
  { id: 12, name: 'Magnesium', weight: 24.305, material: 'Concrete' },
  { id: 13, name: 'Aluminum', weight: 26.9815, material: 'Concrete' },
  { id: 14, name: 'Silicon', weight: 28.0855, material: 'Cotton' },
  { id: 15, name: 'Phosphorus', weight: 30.9738, material: 'Concrete' },
  { id: 16, name: 'Sulfur', weight: 32.065, material: 'Concrete' },
  { id: 17, name: 'Chlorine', weight: 35.453, material: 'Cotton' },
  { id: 18, name: 'Argon', weight: 39.948, material: 'Concrete' },
  { id: 19, name: 'Potassium', weight: 39.0983, material: 'Concrete' },
  { id: 20, name: 'Calcium', weight: 40.078, material: 'Cotton' },
];

@Component({
  selector: 'app-simple-mat-table',
  templateUrl: './simple-mat-table.component.html',
  styleUrls: ['./simple-mat-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleMatTableComponent {
  constructor(private http: HttpClient) {}
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  title = 'angular-material-app';
  displayColumns = ['id', 'name', 'material'];
  totalData: any;
  dataSource = new MatTableDataSource();
  pageSizes = [3, 5, 7];
  outData: any;
  material: string = 'Concrete';

  getList(material: string, page: number, pageSize: number) {
    const url = new URL('https://64faa3decb9c00518f7a0e89.mockapi.io/product');
    url.searchParams.append('material', material);
    url.searchParams.append('page', page.toString());
    url.searchParams.append('limit', pageSize.toString());
    //return this.http.get(url.toString());

    return of(
      ELEMENT_DATA.filter((x) => x.material == material).slice(
        pageSize * (page - 1),
        page * pageSize
      )
    );
  }

  getTotal(material: string) {
    const url = new URL('https://64faa3decb9c00518f7a0e89.mockapi.io/product');
    url.searchParams.append('material', material);
    // this.http.get(url.toString()).subscribe((data) => {
    //   this.outData = data;
    //   this.totalData = this.outData.length;
    // });

    of(ELEMENT_DATA.filter((x) => x.material == material)).subscribe((data) => {
      this.outData = data;
      this.totalData = this.outData.length;
    });
  }

  onTabChange($event: { index: number }) {
    if ($event.index === 0) {
      this.material = 'Concrete';
      this.getTotal(this.material);
    } else {
      this.material = 'Cotton';
      this.getTotal(this.material);
    }

    this.paginator.firstPage();
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');

    this.dataSource.paginator = this.paginator;

    this.getTotal(this.material);
    console.log(this.totalData);
    this.paginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.getList(
            this.material,
            this.paginator.pageIndex + 1,
            this.paginator.pageSize
          ).pipe(catchError(() => observableOf(null)));
        }),
        map((data) => {
          return data;
        })
      )
      .subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data);
      });
  }
}
function observableOf(arg0: null): any {
  throw new Error('Function not implemented.');
}
