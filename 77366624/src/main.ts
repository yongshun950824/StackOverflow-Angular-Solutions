import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <table class="table table-border">
    <tr *ngFor="let r of data">
      <ng-container *ngFor="let value of r ">
        <td>{{ value }}</td>
      </ng-container>
    </tr>
  </table>

  <hr />

  <table class="table table-border">
    <tr *ngFor="let r of actualTableData">
      <ng-container *ngFor="let h of header">
        <td>{{ r[h] }}</td>
      </ng-container>
    </tr>
  </table>
  `,
  styles: [
    `td {
      border: 1px solid black
    }`,
  ],
})
export class App {
  header: any = ['id', 'cid', 'NAME', 'code', 'unit'];
  data: any[] = [
    ['2', '110005001', 'abc test', '0', 'NA'],
    ['2', '110005001', 'abc test', '0', 'NA'],
    ['2', '110005001', 'abc test', '0', 'NA'],
  ];

  actualTableData: any[] = [];

  ngOnInit() {
    this.actualTableData = this.data.map((x) => {
      let obj: { [key: string]: string } = {};

      for (let i = 0; i < this.header.length; i++) {
        obj[this.header[i]] = x[i];
      }

      return obj;
    });

    console.log(this.actualTableData);
  }
}

bootstrapApplication(App);
