import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
//import { ApiPlotService } from '../api-plot.service';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';
import {
  ChartOptions,
  ChartConfiguration,
  Chart,
  registerables,
} from 'chart.js';
//import { NgChartsModule } from 'ng2-charts';
//import { ApiPlot } from '../api-plot';
import { delay, of } from 'rxjs';
Chart.register(...registerables);

@Component({
  selector: 'app-root',
  templateUrl: `main.html`,
  imports: [CommonModule, BaseChartDirective],
  providers: [],
})
export class App {
  @ViewChild('lineChart', { static: true }) lineChart?: ElementRef;
  showChart = false;

  toggleChart() {
    this.showChart = !this.showChart;

    /* Solution 1 */
    /*
    if (this.showChart)
      setTimeout(() => {
        this.loadChartData();
      });
      */
    // this.renderChart;
  }

  //chartData: ApiPlot[] = [];
  chartData: any[] = [];
  labelData: string[] = [];
  realData: number[] = [];
  stationData: string[] = [];

  public testChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)',
      },
    ],
  };

  public testChartOptions: ChartOptions<'line'> = {
    responsive: true,
  };
  public testChartLegend = true;

  constructor(/*private service: ApiPlotService*/) {}

  loadChartData() {
    //this.service.loadTimeSeriesData()
    of([
      {
        timestamp: '2023-01-01',
        value: 10,
        station_code: 'A0001',
      },
      {
        timestamp: '2024-01-01',
        value: 20,
        station_code: 'A0001',
      },
      {
        timestamp: '2025-01-01',
        value: 15,
        station_code: 'A0001',
      },
    ])
      //.pipe(delay(5000))
      .subscribe((item) => {
        this.chartData = item;
        if (this.chartData != null) {
          this.chartData.map((o) => {
            this.labelData.push(o.timestamp);
            this.realData.push(o.value);
            this.stationData.push(o.station_code);
          });

          this.renderChart(this.labelData, this.realData, this.stationData);
        }
      });
  }

  renderChart(labelData: any, valueData: number[], stationData: any) {
    const myChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: labelData,
        datasets: [
          {
            label: 'Water Height in ml',
            data: valueData,
          },
        ],
      },
      options: {},
    });
  }

  ngAfterViewInit(): void {
    //this.loadChartData();
  }

  /* Solution 2 */
  ngAfterViewChecked() {
    this.showChart && this.loadChartData();
  }

  // ngOnInit(): void {
  //   this.loadChartData();
  // }
}

bootstrapApplication(App, {
  providers: [provideCharts(withDefaultRegisterables())],
});
