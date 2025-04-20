import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public barChartOptions: ChartOptions = {
  //   responsive: true
  // };
  // public barChartLabels: Label[] = [
  //   '2006',
  //   '2007',
  //   '2008',
  //   '2009',
  //   '2010',
  //   '2011',
  //   '2012'
  // ];
  // public barChartType: ChartType = 'bar';
  // public barChartLegend = true;
  // public barChartPlugins = [];

  // public barChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  // ];

  lastFour: any[] = [];
  visitSaleChartData: ChartDataSets[] = [];
  visitSaleChartLabels = [];
  visitSaleChartOptions = {};
  visitSaleChartColors = [];

  constructor(private dataservice: DataService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.LoadLastFour();
  }

  LoadLastFour() {
    this.dataservice.GetLastFour().subscribe(
      result => {
        this.lastFour = result;

        // Group Last Four by Type
        let groupedByTypeResult: any[] = this.lastFour.reduce(function(
          obj: any,
          item: any
        ) {
          let type = item.type;

          obj[type] = obj[type] || { label: item.type, data: [] };
          obj[type].data.push(item.total);

          return obj;
        },
        {});

        // Remove key to append to chartData
        let chartData = [];
        for (let type in groupedByTypeResult) {
          chartData.push({
            label: groupedByTypeResult[type].label,
            data: groupedByTypeResult[type].data,
            borderWidth: 1,
            fill: false
          });
        }

        this.visitSaleChartData = chartData;

        // Distinct date for chartLabel
        this.visitSaleChartLabels = [
          ...new Map(
            this.lastFour.map(item => [
              item.date,
              this.datePipe.transform(item.date, 'yyyy-MM-dd')
            ])
          ).values()
        ];
      },
      error => console.error(error)
    );
  }
}
