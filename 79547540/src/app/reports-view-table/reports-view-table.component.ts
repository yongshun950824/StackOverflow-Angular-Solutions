import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reports-view-table',
  templateUrl: './reports-view-table.component.html',
})
export class ReportsViewTableComponent {
  @Input() searchPerformed = false;
  @Input() set identifierFilterValue(value: string[]) {
    this._identifierFilterValue = value;
    this.applyFilter;
  }

  get identifierFilterValue(): string[] {
    return this._identifierFilterValue;
  }

  private _identifierFilterValue: string[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['identifier'];

  @ViewChild(MatSort) sort!: MatSort;
  mockData: any[] = [];
  initialLoad: boolean = false;

  constructor() {
    this.mockData = [
      {
        identifier: 'Checkbox1',
      },

      {
        identifier: 'Checkbox2',
      },
      {
        identifier: 'Checkbox3',
      },
      {
        identifier: 'Checkbox2',
      },
      {
        identifier: 'Checkbox3',
      },
    ];
    this.dataSource = new MatTableDataSource(this.mockData);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['identifierFilterValue']) {
      this.applyFilter();
    }
  }

  applyFilter(): void {
    console.log('mockData************', this.mockData);
    if (!this.mockData || this.mockData.length === 0) {
      console.error('No Data to Filter');
      return;
    }

    let filteredData = [...this.mockData]; // Create a copy of the original mockData

    if (this.identifierFilterValue && this.identifierFilterValue.length > 0) {
      filteredData = this.filterByIdentityCheckbox(filteredData);
    }

    //try filter predicate
    //this.dataSource.filterPredicate = this.createFilter(); // Update the filter predicate
    //this.dataSource.filter = 'triggerFilter'; // Trigger the filter

    console.log('Filtered Data ', filteredData);
    if (this.dataSource) {
      this.dataSource.data = filteredData;
      this.dataSource.paginator = this.paginator; // Assign paginator here
    }
    if (this.dataSource && this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  filterByIdentityCheckbox(data: any[]): any[] {
    console.log(
      '******Applying filter by identifierFilterValue:',
      this.identifierFilterValue
    );

    if (
      !this.identifierFilterValue ||
      this.identifierFilterValue.length === 0
    ) {
      console.log('No Identifier Filters are selected return full data');
      return [...data];
    }

    return data.filter((item) => {
      console.log('Checking item identifier:', item.identifier);

      if (this.identifierFilterValue.indexOf(item.identifier) !== -1) {
        console.log('Matched identifier:', item.identifier);
        return true;
      } else {
        console.log('Identifier not matched', item.identifier);
        return false;
      }
    });
  }
}
