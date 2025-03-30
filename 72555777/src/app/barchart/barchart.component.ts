import { Component, Input, OnInit } from '@angular/core';
import {
  Chart,
  ChartConfiguration,
  ChartEvent,
  ChartType,
  DefaultDataPoint,
  ScatterDataPoint,
  BubbleDataPoint,
} from 'chart.js';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css'],
})
export class BarchartComponent implements OnInit {
  @Input() barData!: (number | ScatterDataPoint | BubbleDataPoint)[][];
  @Input() barLabels!: string[];

  public barChartType: ChartType = 'bar';
  public barChartData: ChartConfiguration['data'];

  defaultBarChartData: Partial<ChartConfiguration['data']>;

  ngOnInit(): void {
    this.defaultBarChartData = {
      labels: this.barLabels,
      datasets: [
        {
          data: this.barData[0],
          label: 'Income',
          backgroundColor: '#3ABD32',
        },
        {
          data: this.barData[1],
          label: 'Expense',
          backgroundColor: '#E02A45',
        },
      ],
    };

    if (
      this.barData !== undefined &&
      this.barLabels !== undefined &&
      Array.isArray(this.barData) &&
      this.barData.length > 0 &&
      Array.isArray(this.barLabels) &&
      this.barLabels.length > 0
    ) {
      this.barChartData = {
        ...this.defaultBarChartData,
        ...{ labels: this.barLabels },
      } as ChartConfiguration['data'];
      this.barChartData.datasets[0].data = this.barData[0];
    } else {
      throw new Error('Charts must have their data and labels inputs defined.');
    }
  }
  public barChartOptions: ChartConfiguration['options'];
}
