import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng2-charts-demo';

  // Doughnut

  public doughnutChartLabels: string[] = ['a', 'b', 'c'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [600, 400, 200],
        backgroundColor: ['#AAAAAA', '#BBBBBB', '#CCCCCC'],
      },
    ],
  };
  public doughnutChartType: ChartConfiguration<'doughnut'>['type'] = 'doughnut';
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
    cutout: '90%',
  };

  constructor() {}
}
