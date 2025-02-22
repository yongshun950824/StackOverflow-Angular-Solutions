import { Component, VERSION } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexAnnotations,
  ApexGrid,
} from 'ng-apexcharts';

export type stackedChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  legend: any | '';
  labels: any | '';
  colors: any | '';
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public stackedChartOptions!: Partial<stackedChartOptions> | any;

  stackedChartData: any[] = [];
  stackChartLabels: any[] = [];
  stackedDataArray: any[] = [];

  ngOnInit() {
    let data = [
      {
        tenantName: 'OBC+',
        labelName: 'Application',
        total: 85,
        postiveTotal: '21',
        negativeTotal: '64',
      },
      {
        tenantName: 'Discovery-world',
        labelName: 'Application',
        total: 194,
        postiveTotal: '119',
        negativeTotal: '75',
      },
      {
        tenantName: 'OBC+',
        labelName: 'Channels',
        total: 40,
        postiveTotal: '0',
        negativeTotal: '40',
      },
      {
        tenantName: 'Discovery-world',
        labelName: 'Channels',
        total: 59,
        postiveTotal: '0',
        negativeTotal: '59',
      },
    ];

    let labels = [...new Set(data.map((x: any) => x.labelName))];
    let subLabels = data.reduce((acc, cur: any) => {
      if (
        acc.findIndex(
          (x) =>
            //console.log(x)
            x.group == cur.tenantName
        ) == -1
      ) {
        acc.push({
          group: cur.tenantName,
          name: cur.tenantName + ' Positive',
          data: [Number(cur.postiveTotal)],
        });

        acc.push({
          group: cur.tenantName,
          name: cur.tenantName + ' Negative',
          data: [Number(cur.negativeTotal)],
        });
      } else {
        let groupPositive = acc.find(
          (x) =>
            x.group == cur.tenantName && x.name == cur.tenantName + ' Positive'
        );

        groupPositive.data.push(Number(cur.postiveTotal));

        let groupNegative = acc.find(
          (x) =>
            x.group == cur.tenantName && x.name == cur.tenantName + ' Negative'
        );

        groupNegative.data.push(Number(cur.negativeTotal));
      }

      return acc;
    }, [] as { group: string; name: string; data: number[] }[]);

    console.log(subLabels);
    this.stackedChartData = [
      {
        name: 'OBC Postivie',
        group: 'OBC',
        data: [21, 0],
      },
      {
        name: 'OBC Negative',
        group: 'OBC',
        data: [64, 40],
      },
      {
        name: 'Discovery-world Postivie',
        group: 'Discovery-world',
        data: [119, 0],
      },
      {
        name: 'Discovery-world Negative',
        group: 'Discovery-world',
        data: [75, 59],
      },
    ];
    this.stackedChartData = subLabels;
    this.stackChartLabels = ['Application', 'Cusromer Care'];

    this.stackedColumnChart();
  }

  stackedColumnChart(): void {
    this.stackedChartOptions = {
      series: this.stackedChartData,
      compchart: {
        type: 'bar',
        height: 435,
        stacked: true,
      },

      compstroke: {
        width: 1,
        colors: ['#fff'],
      },

      compdataLabels: {
        formatter: (val: any) => {
          return Number(val);
        },
      },

      compplotOptions: {
        bar: {
          horizontal: false,
        },
      },

      compxaxis: {
        categories: this.stackChartLabels,
      },

      compfill: {
        opacity: 1,
      },

      compcolors: ['#22bec6', '#6ae495', '#106ac0', '#059cd7'],

      compyaxis: {
        labels: {
          formatter: (val: any) => {
            return val;
          },
        },
      },

      complegend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 8,
      },
    };
  }
}
