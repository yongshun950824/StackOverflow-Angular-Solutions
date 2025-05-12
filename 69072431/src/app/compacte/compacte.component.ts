import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  displayedColumns: string[] = [
    'collaborator',
    'cetCP',
    'cetRTT',
    //'moisSoldes',
    'perteRTT',
    'perteCP'
    //'mnth'
  ];

  displayMonthColumns: string[] = [];

  index: string[] = [
    'collaborator',
    'cetCP',
    'cetRTT',
    'moisSoldes',
    'perteRTT',
    'perteCP',
    'mnth'
  ];

  dataSource: visionCompacteDTOs[] = [];

  ngOnInit(): void {
    this.reportingService.getNews().subscribe(
      (response: visionCompacteDTOs[]) => {
        if (!response) this.dataSource = response;

        for (let mnth of response[0].mnth) {
          this.displayedColumns.push(mnth.month);
          this.displayMonthColumns.push(mnth.month);
        }

        response = response.map(data => {
          let mnth = data.mnth;

          let mnthObj: { [key: string]: number } = mnth.reduce(function(
            obj: { [key: string]: number },
            item
          ) {
            obj[item.month] = item.solde;
            return obj;
          },
          {});

          return {
            ...data,
            ...mnthObj
          };
        });

        this.dataSource = response;
        console.log(response);
      },
      error => {
        console.log('Error Occured: ' + error);
      }
    );
  }
}
