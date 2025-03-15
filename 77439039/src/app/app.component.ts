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
        negativeTotal: '-64',
      },
      {
        tenantName: 'Discovery-world',
        labelName: 'Application',
        total: 194,
        postiveTotal: '119',
        negativeTotal: '-75',
      },
      {
        tenantName: 'OBC+',
        labelName: 'Channels',
        total: 40,
        postiveTotal: '0',
        negativeTotal: '-40',
      },
      {
        tenantName: 'OBC+',
        labelName: 'Wifi',
        total: 1,
        postiveTotal: '1',
        negativeTotal: '1',
      },
      {
        tenantName: 'Discovery-world',
        labelName: 'Channels',
        total: 59,
        postiveTotal: '0',
        negativeTotal: '-59',
      },
      {
        tenantName: 'Vidocon',
        labelName: 'Test',
        total: 30,
        postiveTotal: '10',
        negativeTotal: '-20',
      },
    ];

    let newData = data
      .map((x) => [
        {
          labelName: x.labelName,
          group: x.tenantName,
          name: x.tenantName + ' Positive',
          value: x.postiveTotal,
        },
        {
          labelName: x.labelName,
          group: x.tenantName,
          name: x.tenantName + ' Negative',
          value: x.negativeTotal,
        },
      ])
      .reduce((acc, cur) => {
        acc.push(cur[0]);
        acc.push(cur[1]);

        return acc;
      }, []);

    console.log(newData);
    let labels = [...new Set(data.map((x: any) => x.labelName))];

    let categoryGroups = [...new Set(newData.map((x) => x.name))];
    let subLabels = categoryGroups.map((category) => {
      return {
        group: newData.find((x) => x.name == category).group,
        name: category,
        data: labels.map(
          (label) =>
            newData.find((z) => z.name == category && z.labelName == label)
              ?.value ?? 0
        ),
      };
    });

    console.log(categoryGroups);
    console.log(subLabels);

    this.stackedChartData = subLabels;
    this.stackChartLabels = labels;

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
