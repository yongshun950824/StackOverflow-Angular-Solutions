import { Component, VERSION, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedColumns = ['loanKey'];

  @ViewChild(MatTable) table!: MatTable<Model>;

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

  sortDict: any = {
    loanKey: {
      asc: (a: Model, b: Model) => a.loan.loanKey - b.loan.loanKey,
      desc: (a: Model, b: Model) => b.loan.loanKey - a.loan.loanKey,
    },
  };

  sortChange(sortState: Sort) {
    this.data.sort(this.sortDict[sortState.active][sortState.direction]);

    this.table.renderRows();
  }
}

export interface Model {
  loan: Loan;
}

export interface Loan {
  loanKey: number;
  poolNum: string;
  triggers?: Trigger[] | undefined;
}

export interface Trigger {
  id: number;
  triggerType: string;
  triggerValue: number;
}
