import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-custom-pie',
  templateUrl: './custom-pie.component.html',
  // styleUrls: ['./custom-pie.component.css'],
})
export class CustomPieComponent {
  public pieChartType: ChartConfiguration<'pie'>['type'] = 'pie';

  chartData = [
    { data: 2, label: 'Label 1' },
    { data: 10, label: 'Label 2' },
    { data: 40, label: 'Label 3' },
  ];

  public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value: any, ctx: any) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    },
  };

  pieChartLabels: string[] = [];
  pieChartDatasets: any[] = [];

  constructor() {}

  ngOnInit() {
    this.pieChartLabels = this.chartData.map((x) => x.label);
    this.pieChartDatasets = [
      {
        data: this.chartData.map((x) => x.data),
      },
    ];
  }
}
