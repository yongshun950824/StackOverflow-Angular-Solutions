import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <apx-chart
          [series]="chart.series"
          [chart]="chart.chart"
          [xaxis]="chart.xaxis"
          [yaxis]="chart.yaxis"
          [grid]="chart.grid"
          [stroke]="chart.stroke"
          [tooltip]="chart.tooltip"
          [plotOptions]="chart.plotOptions"
          [dataLabels]="chart.dataLabels"
          [legend]="chart.legend"
          [colors]="chart.colors"
          [markers]="chart.markers"
        >
        </apx-chart>
  `,
  imports: [NgApexchartsModule],
})
export class App {
  name = 'Angular';

  chart: any = {
    series: [
      {
        name: 'Sample',
        data: [37.9, 21.8, 8.6],
      },
    ],
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      height: 380,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 4,
        columnWidth: '40%',
        barHeight: '40%',
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        },
      },
    },

    markers: {
      size: 3,
    },
    stroke: {
      curve: 'straight',
      width: '0',
    },
    colors: ['#763EBD'],
    legend: {
      show: true,
    },
    grid: {
      show: true,
      strokeDashArray: 0,
      borderColor: 'rgba(0,0,0,0.1)',
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      type: 'category',
      categories: ['Label 1', 'Label 2', 'Label 3'],
    },
    tooltip: {
      theme: 'dark',
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return val.toString().concat('%');
      },
      style: {
        colors: ['#000'],
      },
      offsetX: 25,
      textAnchor: "start"
    },
  };
}

bootstrapApplication(App);
