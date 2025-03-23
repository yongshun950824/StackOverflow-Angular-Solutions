import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns = ['title', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(private service: DataService) {}

  ngOnInit() {
    //this.dataSource.data = [
    //  { id: 1, name: 'Apple' },
    //  { id: 2, name: 'Banana' }
    // ];
    this.service.getData().subscribe((res: []) => {
      this.dataSource.data = res;
      this.dataSource.sort = this.sort;
      console.log('so', this.sort);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  delete(id: number, index: number): void {
    this.dataSource.data.splice(index, 1);
    this.table.renderRows();
    this.dataSource._updateChangeSubscription();

    // working alternative
    // this.dataSource.data = this.dataSource.data.filter( (item: any) => item.id !== id);
  }
}
