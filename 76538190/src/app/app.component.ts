import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import Chart from 'chart.js/auto';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  public barChartOptions: any = {
    responsive: true,
    scaleShowVerticalLines: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: 
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            maxRotation: 0,
            minRotation: 0,
          },
        },
      
      y: 
        {
          stacked: true,
        },
      
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        font: {
          size: 10,
        },
      },
    },
  };

  public barChartLabels: string[];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [];

  ngOnInit() {
    /**My APi result */
    let data = [
      {
        operatorName: 'MBC',
        label: 'Application',
        subLabel: 'Positive',
        count: 1,
      },
      {
        operatorName: 'MBC',
        label: 'Channels',
        subLabel: 'Negative',
        count: -1,
      },
      {
        operatorName: 'MBC',
        label: 'Customer Care',
        subLabel: 'Negative',
        count: -1,
      },
      {
        operatorName: 'MBC',
        label: 'Customer Care',
        subLabel: 'Positive',
        count: 1,
      },
      {
        operatorName: 'OSN+',
        label: 'Application',
        subLabel: 'Negative',
        count: -1,
      },
      {
        operatorName: 'OSN+',
        label: 'Application',
        subLabel: 'Positive',
        count: 1,
      },
      {
        operatorName: 'OSN+',
        label: 'Channels',
        subLabel: 'Positive',
        count: 1,
      },
      {
        operatorName: 'OSN+',
        label: 'Customer Care',
        subLabel: 'Positive',
        count: 1,
      },
    ];

    /**Implement Logic here */
    let labels = [...new Set(data.map((x) => x.label))];
    //let operators = [...new Set(data.map((x) => x.operatorName))];
    let subLabels = data.reduce((acc, cur: any) => {
      if (
        acc.findIndex(
          (x) =>
            x.operatorName == cur.operatorName && x.subLabel == cur.subLabel
        ) == -1
      )
        acc.push({ operatorName: cur.operatorName, subLabel: cur.subLabel });

      return acc;
    }, [] as { operatorName: string; subLabel: string }[]);

    let subLabelDatasets = subLabels.map((x) => {
      let datasets = [];
      let opratorlabes = [];
      for (let label of labels) {
        datasets.push(
          data.find(
            (y) =>
              y.label == label &&
              y.subLabel == x.subLabel &&
              y.operatorName == x.operatorName
          )?.count || 0
        );
      }

      return {
        label: x.operatorName + ' ' + x.subLabel,
        data: datasets,
        stack: x.operatorName,
        type: 'bar',
      };
    });

    console.log(labels);
    console.log(subLabels);
    console.log(subLabelDatasets);
    /**Implement Logic here */

    //this.barChartLabels = labels;
    //this.barChartData = subLabelDatasets;
    this.barChartLabels = labels;
    /*['Application', 'Customer Care', 'Package'];*/
    this.barChartData = subLabelDatasets;
    /*[
      {
        label: 'OSN+ Passtive',
        type: 'bar',
        stack: 'OSN+',
        data: [30, 31, 23],
      },
      {
        label: 'OSN+ Negative',
        type: 'bar',
        stack: 'OSN+',
        data: [-15, -16],
      },
      {
        label: 'MBC Passtive',
        type: 'bar',
        stack: 'MBC',
        data: [20, 21],
      },
      {
        label: 'MBC Negative',
        type: 'bar',
        stack: 'MBC',
        data: [-10, -11],
      },
    ];
    */

   new Chart('baseChart', {
      type: <ChartType>this.barChartType,
      options: this.barChartOptions,
      data: {
        datasets: this.barChartData,
        labels: this.barChartLabels,
      },
    });
  }

  chartClicked(event) {

  }

  chartHovered(event) {

  }
}
