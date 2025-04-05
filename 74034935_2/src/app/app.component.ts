import { Component, VERSION, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedColumns = ['loanKey'];

  @ViewChild(MatSort) sort!: MatSort;

  data: Model[] = [
    {
      loan: {
        loanKey: 6575,
        poolNum: '300801056',
        triggers: [
          {
            id: 4276,
            triggerType: 'DSCR',
            triggerValue: 1.2,
          },
        ],
      },
    },
    {
      loan: {
        loanKey: 6651,
        poolNum: '30308716',
      },
    },
    {
      loan: {
        loanKey: 8224,
        poolNum: '998',
      },
    },
    {
      loan: {
        loanKey: 8225,
        poolNum: '999',
      },
    },
    {
      loan: {
        loanKey: 9877,
        poolNum: '998',
      },
    },
    {
      loan: {
        loanKey: 9878,
        poolNum: '999',
      },
    },
  ];

  dataSource!: MatTableDataSource<Model>;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'loanKey':
          return item.loan.loanKey;
        default:
          return item[property];
      }
    };
    this.dataSource.sort = this.sort;
  }
}

interface KeysIndexer {
  [key: string]: any;
}

export interface Model extends KeysIndexer {
  loan: Loan;
}

export interface Loan extends KeysIndexer {
  loanKey: number;
  poolNum: string;
  triggers?: Trigger[] | undefined;
}

export interface Trigger extends KeysIndexer {
  id: number;
  triggerType: string;
  triggerValue: number;
}
