import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AddAssetService } from '../shared/add-asset.service';
export interface Element {
  assetId: any;
  assetName: any;
  cpuName: any;
  hddName: any;
}

@Component({
  selector: 'app-material-two',
  templateUrl: './material-two.component.html',
  styleUrls: ['./material-two.component.css']
})
export class MaterialTwoComponent implements OnInit {
  displayedColumns: string[] = ['assetId', 'assetName', 'cpuName', 'hddName'];
  dataSource: any;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  constructor(private service: AddAssetService) {}

  ngOnInit(): void {
    this.assetGrid();
    console.log(this.dataSource);
  }
  assetGrid() {
    this.service.GetAssets().subscribe(user => {
      console.log(user);
      this.dataSource = new MatTableDataSource<Element>(user);
      console.log('this.listData', this.dataSource);
      console.log('this.user', user);
    });
  }
  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.sort = this.sort;
    }
  }
}
