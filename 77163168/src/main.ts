import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { HighchartsChartModule } from 'highcharts-angular';
import * as HighCharts from 'highcharts';

// Deprecated
// import HighChartsMore from 'highcharts/highcharts-more';
// HighChartsMore(HighCharts);

import 'highcharts/highcharts-more';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HighchartsChartModule],
  template: `
  <div class="row mt-3 bg-white p-2 pt-4 rounded box-shadow" *ngFor="let item of comparisonsStatistics.listOfJobPostComparisonStatisticsPerRound">
  <div class="container-fluid">
     <div class="row">
       <div class="col-md-12">
         <div *ngIf="isHighcharts" [id]="'gaugeChart_' + item.roundNumber" style="width: 100%; height: 400px; margin: 0 auto"></div>
       </div>
     </div>
   </div>
</div>
  `,
})
export class App {
  name = 'Angular';

  isHighcharts = typeof HighCharts === 'object';
  Highcharts: typeof HighCharts = HighCharts;

  comparisonsStatistics = {
    listOfJobPostComparisonStatisticsPerRound: [
      {
        roundNumber: 1,
      },
    ],
  };

  ngAfterViewInit() {
    for (let res of this.comparisonsStatistics
      .listOfJobPostComparisonStatisticsPerRound) {
        this.isHighcharts && HighCharts.chart('gaugeChart_' + res.roundNumber, {
        chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false,
          height: '80%',
        },
        title: {
          text: 'Speedometer',
        },

        pane: {
          startAngle: -90,
          endAngle: 89.9,
          background: null,
          center: ['50%', '75%'],
          size: '110%',
        },

        yAxis: {
          min: 0,
          max: 200,
          tickPixelInterval: 72,
          lineWidth: 0,
          plotBands: [
            {
              from: 0,
              to: 120,
              color: '#55BF3B', // green
              thickness: 20,
            },
            {
              from: 120,
              to: 160,
              color: '#DDDF0D', // yellow
              thickness: 20,
            },
            {
              from: 160,
              to: 200,
              color: '#DF5353', // red
              thickness: 20,
            },
          ],
        },

        series: [
          {
            type: undefined,
            name: 'Speed',
            data: [80],
            tooltip: {
              valueSuffix: ' km/h',
            },
          },
        ],
      } as any);
    }
  }
}

bootstrapApplication(App);
