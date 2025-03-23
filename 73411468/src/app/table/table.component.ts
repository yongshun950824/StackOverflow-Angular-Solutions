import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit {
  displayedColumns = ['title', 'userId'];
  dataSource = new MatTableDataSource();
  data: any;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  constructor(private service: DataService) {}

  ngAfterViewInit(): void {
    this.getList();
  }

  getList() {
    this.service.getData().subscribe((res: any) => {
      console.log(res);

      this.dataSource.data = res;
      this.dataSource.sort = this.sort;
      console.log('so', this.sort);
    });
  }
}
