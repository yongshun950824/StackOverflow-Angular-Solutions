import { Component, ViewChild } from '@angular/core';
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

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  barChartData: any = [];
  barChartLabels: any = [];
  ngOnInit() {
    let data = [
      {
        tenantName: 'Station',
        labelName: 'aaaa',
        total: 7,
      },
      {
        tenantName: 'GERMANY',
        labelName: 'Application',
        total: 10,
      },
      {
        tenantName: 'GERMANY',
        labelName: 'Packages',
        total: 5,
      },
      {
        tenantName: 'Station',
        labelName: 'Security Features',
        total: 4,
      },
      {
        tenantName: 'Station',
        labelName: 'Setup and Configuration',
        total: 11,
      },
      {
        tenantName: 'Station',
        labelName: 'Speed',
        total: 9,
      },
      {
        tenantName: 'Station',
        labelName: 'WIFI signal Range',
        total: 21,
      },
    ];

    let labels = [...new Set(data.map((x: any) => x.labelName))];
    let tenants = [...new Set(data.map((x: any) => x.tenantName))];

    // let subLabels = data.reduce((acc: any, cur: any) => {
    //   if (
    //     acc.findIndex(
    //       (x: any) =>
    //         x.tenantName == cur.tenantName && x.labelName == cur.labelName
    //     ) == -1
    //   )
    //     acc.push({
    //       tenantName: cur.tenantName,
    //       labelName: cur.labelName,
    //       total: cur.total,
    //     });

    //   return acc;
    // }, [] as { tenantName: string; labelName: string }[]);

    this.barChartData = tenants.map((tenant: any) => {
      return {
        name: tenant,
        data: labels.map(
          (label) =>
            data.find((y) => y.tenantName == tenant && y.labelName == label)
              ?.total
        ),
      };
    });

    //console.log(tenantLabels);

    // this.barChartData = subLabelDatasets;

    this.barChartLabels = labels;
    /** Tried the code */
    // this.barChartData = [
    //   {
    //     name: 'Station',
    //     group: 'Station aaa',
    //     data: [7],
    //   },
    //   {
    //     name: 'GERMANY',
    //     group: 'GERMANY Application',
    //     data: [0, 10],
    //   },
    //   {
    //     name: 'GERMANY',
    //     group: 'GERMANY Packages',
    //     data: [0, 0, 5],
    //   },
    //   {
    //     name: 'Station',
    //     group: 'Station Features',
    //     data: [0, 0, 0, 4],
    //   },
    //   {
    //     name: 'Station',
    //     group: 'Station Setup and Configuration',
    //     data: [0, 0, 0, 0, 11],
    //   },
    //   {
    //     name: 'Station',
    //     group: 'Station Speed',
    //     data: [0, 0, 0, 0, 0, 9],
    //   },
    //   {
    //     name: 'Station',
    //     group: 'Station WIFI signal Range',
    //     data: [0, 0, 0, 0, 0, 0, 21],
    //   },
    // ];
    this.stackedColumnChart();
  }

  stackedColumnChart() {
    // console.log(this.barChartData);
    this.chartOptions = {
      series: this.barChartData,
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
      },
      xaxis: {
        categories: this.barChartLabels,
      },
    };
  }
}
