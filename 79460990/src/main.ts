import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import * as Highcharts from 'highcharts';
import 'highcharts/modules/drilldown';
import { HighchartsChartModule } from 'highcharts-angular';

// Deprecated
// import Drilldown from 'highcharts/modules/drilldown';
// Initialize the drilldown module
//Drilldown(Highcharts);

@Component({
  selector: 'app-root',
  template: `
    <highcharts-chart
      [Highcharts]="Highcharts"
      [options]="chartOptions"
      style="width: 100%; height: 400px; display: block;">
    </highcharts-chart>
  `,
  imports: [HighchartsChartModule],
})
export class App {
  ngOnInit(): void {
    this.loadChart();
  }

  isHighcharts = typeof Highcharts === 'object';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  loadChart(): void {
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Basic drilldown',
      },
      xAxis: {
        type: 'category',
      },

      legend: {
        enabled: false,
      },

      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
          },
        },
      },

      series: [
        {
          name: 'Things',
          colorByPoint: true,
          data: [
            {
              name: 'Animals',
              y: 5,
              drilldown: 'animals',
            },
            {
              name: 'Fruits',
              y: 2,
              drilldown: 'fruits',
            },
            {
              name: 'Cars',
              y: 4,
              drilldown: 'cars',
            },
          ],
        },
      ],
      drilldown: {
        series: [
          {
            id: 'animals',
            data: [
              ['Cats', 4],
              ['Dogs', 2],
              ['Cows', 1],
              ['Sheep', 2],
              ['Pigs', 1],
            ],
          },
          {
            id: 'fruits',
            data: [
              ['Apples', 4],
              ['Oranges', 2],
            ],
          },
          {
            id: 'cars',
            data: [
              ['Toyota', 4],
              ['Opel', 2],
              ['Volkswagen', 2],
            ],
          },
        ],
      },
    } as any;
  }
}

bootstrapApplication(App);
