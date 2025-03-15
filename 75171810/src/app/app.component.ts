import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Column, LineResetTable, lineResetTable } from './data';
import {
  SortableHeaderDirective,
  SortEvent,
  compare,
} from './sortable-header.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  filter: string;
  list: LineResetTable = lineResetTable;
  table: LineResetTable = lineResetTable;

  @ViewChildren(SortableHeaderDirective)
  headers: QueryList<SortableHeaderDirective>;

  onSort({ column, direction }: SortEvent, index) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.list = this.table;
    } else {
      this.list.table.rows = [...this.table.table.rows].sort((a, b) => {
        const res = compare(a.columns[index].content, b.columns[index].content);
        return direction === 'asc' ? res : -res;
      });
    }
  }
}
