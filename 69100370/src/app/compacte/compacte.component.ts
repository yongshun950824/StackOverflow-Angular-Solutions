import { Component, OnInit } from '@angular/core';
import moment = require('moment');
import { visionCompacteDTOs } from '../models/model';
import { ReportingService } from '../services/reporting.service';

@Component({
  selector: 'app-compacte',
  templateUrl: './compacte.component.html',
  styleUrls: ['./compacte.component.css']
})
export class CompacteComponent implements OnInit {
  don: any;
  sld: any;
  userdata: any = [];
  constructor(private reportingService: ReportingService) {}

  displayedColumns: string[] = ['collaborator', 'cetCP', 'cetRTT'];

  displayMonthColumns: string[] = [];

  displayFirstRowHeaders: string[] = [
    'header-row-first-group',
    'header-row-second-group',
    'header-row-third-group'
  ];
  displaySecondRowHeaders: string[] = [];

  nestedColumns: { [key: string]: string[] } = {
    compteurFDP: ['cp', 'rtts', 'rtte'],
    compteurFinDuMois: ['cp', 'rtts', 'rtte'],
    prisesDuMois: ['cp', 'rtts', 'rtte']
  };

  dataSource: visionCompacteDTOs[] = [];

  ngOnInit(): void {
    this.reportingService.getNews().subscribe(
      (response: visionCompacteDTOs[]) => {
        if (!response) this.dataSource = response;

        if (response.length == 0) this.dataSource = response;

        for (let mnth of response[0].mnth) {
          let date = moment(mnth.month, 'DD/MM/YYYY');
          let monthYear = date.format('MMM-YYYY');

          // Generate display month
          this.displayMonthColumns.push(monthYear);

          // Generate First Row Header
          this.displayFirstRowHeaders.push(`header-${monthYear}`);

          for (let col in this.nestedColumns) {
            // Generate First Row Header
            this.displaySecondRowHeaders.push(
              `second-header-${monthYear}-${col}`
            );

            // Generate displayed columns or Third Row Header
            for (let innerCol of this.nestedColumns[col])
              this.displayedColumns.push(`${monthYear}-${col}-${innerCol}`);
          }
        }

        response = response.map(data => {
          let mnth = data.mnth;

          let mnthObj: { [key: string]: any } = mnth.reduce(
            (obj: { [key: string]: any }, item) => {
              let date = moment(item.month, 'DD/MM/YYYY');
              let monthYear = date.format('MMM-YYYY');
              obj[monthYear] = item;

              return obj;
            },
            {}
          );

          return {
            ...data,
            ...mnthObj
          };
        });

        this.dataSource = response;
        console.log('Response', response);
      },
      error => {
        console.log('Error Occured: ' + error);
      }
    );
  }
}
