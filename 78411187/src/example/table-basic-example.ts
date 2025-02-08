import {
  CommonModule,
  NgFor,
  NgSwitch,
  NgTemplateOutlet,
} from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrl: 'table-basic-example.css',
  templateUrl: 'table-basic-example.html',
  standalone: true,
  imports: [MatTableModule, CommonModule],
})
export class TableBasicExample {
  displayedColumns: string[] = ['artistName'];

  firstHeaderColumns = ['_'];

  data = {
    data: [
      {
        artistId: 'A001',
        artistName: 'Q1',
        songs: [
          {
            songId: 'S001',
            songName: 'Song 1',
            percentage: '10%',
            value: '$200',
          },
          {
            songId: 'S002',
            songName: 'Song 2',
            percentage: '15%',
            value: '$250',
          },
        ],
      },
      {
        artistId: 'A002',
        artistName: 'BW',
        songs: [
          {
            songId: 'S001',
            songName: 'Song 1',
            percentage: '10%',
            value: '$200',
          },
          {
            songId: 'S002',
            songName: 'Song 2',
            percentage: '10%',
            value: '$200',
          },
        ],
      },
      {
        artistId: 'A003',
        artistName: 'POD',
        songs: [
          {
            songId: 'S001',
            songName: 'Song 1',
            percentage: '5%',
            value: '$150',
          },
          {
            songId: 'S002',
            songName: 'Song 2',
            percentage: '10%',
            value: '$200',
          },
        ],
      },
    ],
    summary: [
      {
        songName: 'Song 1',
        totalPercentage: '25%',
        totalValue: '$550',
      },
      {
        songName: 'Song 2',
        totalPercentage: '25%',
        totalValue: '$650',
      },
    ],
  };

  transformDataSource: any[] = [];

  ngOnInit() {
    let songs = this.data.summary.map((x) => x.songName);
    this.firstHeaderColumns = this.firstHeaderColumns.concat(songs);
    this.displayedColumns = this.displayedColumns.concat(
      ...songs.map((x: string, i: number) => [`percentage_${i}`, `value_${i}`])
    );

    this.transformDataSource = this.data.data.map((x: any) => {
      let obj: any = { artistName: x.artistName };

      for (let i = 0; i < songs.length; i++) {
        obj[`percentage_${i}`] = x.songs[i].percentage;
        obj[`value_${i}`] = x.songs[i].value;
      }

      return obj;
    });

    let summary: any = { artistName: 'SUM' };
    this.data.summary.forEach((x: any, i: number) => {
      summary[`percentage_${i}`] = x.totalPercentage;
      summary[`value_${i}`] = x.totalValue;
    });
    this.transformDataSource.push(summary);

    console.log(this.transformDataSource);
  }
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
