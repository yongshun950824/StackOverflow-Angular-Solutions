import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import {
  CheckboxSelectionCallbackParams,
  ColDef,
  FirstDataRenderedEvent,
  GridApi,
  GridReadyEvent,
  HeaderCheckboxSelectionCallbackParams,
  IGroupCellRendererParams,
  PaginationChangedEvent,
  PaginationNumberFormatterParams,
} from 'ag-grid-community';
import { IOlympicData } from './interfaces';

@Component({
  selector: 'app-root',
  template: `<div class="example-wrapper">
    <div class="example-header">
      Page Size:
      <select (change)="onPageSizeChanged()" id="page-size">
        <option value="10">10</option>
        <option value="100">100</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
      </select>
    </div>
    <ag-grid-angular
      style="width: 100%; height: 100%;"
      class="ag-theme-alpine"
      [columnDefs]="columnDefs"
      [autoGroupColumnDef]="autoGroupColumnDef"
      [defaultColDef]="defaultColDef"
      [suppressRowClickSelection]="true"
      [groupSelectsChildren]="true"
      [rowSelection]="rowSelection"
      [rowGroupPanelShow]="rowGroupPanelShow"
      [pivotPanelShow]="pivotPanelShow"
      [pagination]="true"
      [paginationPageSize]="paginationPageSize"
      [paginationNumberFormatter]="paginationNumberFormatter"
      [rowData]="rowData"
      (firstDataRendered)="onFirstDataRendered($event)"
      (gridReady)="onGridReady($event)"
      (paginationChanged)="onPaginationChanged($event)"
    ></ag-grid-angular>
  </div> `,
  standalone: true,
  imports: [CommonModule, HttpClientModule, AgGridModule],
})
export class AppComponent {
  private gridApi!: GridApi<IOlympicData>;

  public columnDefs: ColDef[] = [
    {
      headerName: 'Athlete',
      field: 'athlete',
      minWidth: 170,
      checkboxSelection: checkboxSelection,
      headerCheckboxSelection: headerCheckboxSelection,
    },
    { field: 'age' },
    { field: 'country' },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ];
  public autoGroupColumnDef: ColDef = {
    headerName: 'Group',
    minWidth: 170,
    field: 'athlete',
    valueGetter: (params) => {
      if (params.node!.group) {
        return params.node!.key;
      } else {
        return params.data[params.colDef.field!];
      }
    },
    headerCheckboxSelection: true,
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true,
    } as IGroupCellRendererParams,
  };
  public defaultColDef: ColDef = {
    editable: true,
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
  };
  public rowSelection: 'single' | 'multiple' = 'multiple';
  public rowGroupPanelShow: 'always' | 'onlyWhenGrouping' | 'never' = 'always';
  public pivotPanelShow: 'always' | 'onlyWhenPivoting' | 'never' = 'always';
  public paginationPageSize = 10;
  public paginationNumberFormatter: (
    params: PaginationNumberFormatterParams
  ) => string = (params: PaginationNumberFormatterParams) => {
    //console.log(params)
    return '[' + params.value.toLocaleString() + ']';
  };
  public rowData!: IOlympicData[];

  constructor(private http: HttpClient) {}

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.paginationGoToPage(862);
  }

  onPageSizeChanged() {
    var value = (document.getElementById('page-size') as HTMLInputElement)
      .value;
    this.gridApi.paginationSetPageSize(Number(value));
  }

  onPaginationChanged = (event: PaginationChangedEvent<IOlympicData>) => {
    if (!this.gridApi) return;

    // Get current page - 0-index based
    let currentPageIndex = this.gridApi.paginationGetCurrentPage();

    // Get total count
    let totalRowCount = this.gridApi.paginationGetRowCount();

    // Get page size
    let pageSize = this.gridApi.paginationGetPageSize();

    let firstItemNoForCurrentPage = Math.min(
      currentPageIndex * pageSize + 1,
      totalRowCount
    );

    let lastItemNoForCurrentPage = Math.min(
      currentPageIndex * pageSize + pageSize,
      totalRowCount
    );

    console.log('firstItemNoForCurrentPage:', firstItemNoForCurrentPage);
    console.log('lastItemNoForCurrentPage:', lastItemNoForCurrentPage);
  };

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.gridApi = params.api;

    this.http
      .get<IOlympicData[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => {
        this.rowData = data;
      });
  }
}

var checkboxSelection = function (params: CheckboxSelectionCallbackParams) {
  // we put checkbox on the name if we are not doing grouping
  return params.columnApi.getRowGroupColumns().length === 0;
};
var headerCheckboxSelection = function (
  params: HeaderCheckboxSelectionCallbackParams
) {
  // we put checkbox on the name if we are not doing grouping
  return params.columnApi.getRowGroupColumns().length === 0;
};
