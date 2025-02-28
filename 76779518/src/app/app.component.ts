import { Component, ElementRef, ViewChild } from '@angular/core';
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
      x: {
        stacked: true,
        ticks: {
          beginAtZero: true,
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
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
    onClick: function (evt, elements, chart) {
      const bars = chart.getElementsAtEventForMode(
        evt,
        'nearest',
        { intersect: true },
        true
      );
      if (bars.length === 0) return; // no bars

      const bar = bars[0];

      // Get index and label text
      const index = bar.index;
      const label = chart.data.labels[index];
      let selectedDataset = chart.data.datasets[bar.datasetIndex];

      console.log('Selected label:', label);
      console.log('Selected sub-label:', selectedDataset.label);
      console.log("Selected sub-label's value:", selectedDataset.data[index]);
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
        operatorName: 'MBT',
        label: 'Application',
        subLabel: 'Positive',
        count: 3,
      },
      {
        operatorName: 'MBT',
        label: 'Channels',
        subLabel: 'Negative',
        count: -1,
      },
      {
        operatorName: 'MBT',
        label: 'Customer Care',
        subLabel: 'Negative',
        count: -1,
      },
      {
        operatorName: 'MBT',
        label: 'Customer Care',
        subLabel: 'Positive',
        count: 1,
      },
      {
        operatorName: 'OTS',
        label: 'Application',
        subLabel: 'Negative',
        count: -1,
      },
      {
        operatorName: 'OTS',
        label: 'Application',
        subLabel: 'Positive',
        count: 1,
      },
      {
        operatorName: 'OTS',
        label: 'Channels',
        subLabel: 'Positive',
        count: 1,
      },
      {
        operatorName: 'OTS',
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

    this.barChartLabels = labels;
    this.barChartData = subLabelDatasets;

    new Chart('baseChart', {
      type: <ChartType>this.barChartType,
      options: this.barChartOptions,
      data: {
        datasets: this.barChartData,
        labels: this.barChartLabels,
      },
    });
  }
}
