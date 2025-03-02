import { Component } from '@angular/core';

import { Chart, ChartOptions, ChartType } from 'chart.js/auto';
import { fontString } from 'chart.js/helpers';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  CurrencyAmountchartLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  CurrencyAmountchartDatasets = [
    {
      fill: 'start',
      fillColor: '#79D1CF',
      strokeColor: '#79D1CF',
      data: [60, 80, 81, 56, 55, 40],
    },
  ];

  chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Series A',
        fill: 'start',
        fillColor: '#79D1CF',
        strokeColor: '#79D1CF',
        data: [60, 80, 81, 56, 55, 40],
      },
    ],
  };

  OverdueAgeingAmountchartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      enabled: true,
    },
    hover: {
      animationDuration: 0,
    },
    layout: {
      padding: {
        left: 0,
        right: 25,
        top: 0,
        bottom: 0,
      },
    },
    animation: {
      duration: 10,
      onComplete: function () {
        var chartInstance = this.chart,
          ctx = chartInstance.ctx;
        ctx.font = fontString(
          Chart.defaults.font.size,
          Chart.defaults.font.style,
          Chart.defaults.font.family
        );
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        this.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            var data = dataset.data[index];

            ctx.fillText(data, bar._model.x, bar._model.y - 5);
            //ctx.fontColor = '#000';
            ctx.fillStyle = '#000';
          });
        });
      },
    },
    plugins: {
      labels: {
        render: 'value',
        fontSize: 140,
        fontStyle: 'bold',
        fontColor: '#000',
        fontFamily: '"Lucida Console", Monaco, monospace',
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#333',
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: 
        {
          ticks: {
            autoSkip: false,
          },
        },
      
    },
  } as any;

  chartType: any = 'line';

  public chartColors: Array<any> = [
    {
      //pink
      backgroundColor: 'rgba(243, 117, 144, 0.5)',
      borderColor: ['rgb(235, 76, 110)'],
    },
    {
      //Yellow
      borderColor: ['#FF9900'],
    },
    {
      //green
      borderColor: ['#109618'],
    },
    {
      //blue
      borderColor: ['#3366CC'],
    },
    {
      //purpule
      borderColor: ['#990099'],
    },
    {
      //blue
      borderColor: ['#3B3EAC'],
    },
    {
      borderColor: ['#0099C6'],
    },
    {
      borderColor: ['#DD4477'],
    },
  ];

  ngAfterViewInit() {
    new Chart('baseChart', {
      type: <ChartType>this.chartType,
      options: {
        ...this.OverdueAgeingAmountchartOptions,
        //color: this.chartColors as any[],
        legend: true
      } as any,
      data: {
        datasets: this.CurrencyAmountchartDatasets,
        labels: this.CurrencyAmountchartLabels,
      },
    });
  }
}
