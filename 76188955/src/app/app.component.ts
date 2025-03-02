import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  public barChartLabels: string[];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    //{ data: [], label: 'Volume Sales' },
    //{ data: [], label: 'Value Sales' },
  ];
  constructor(private _emp: DataService) {}
  ngOnInit() {
    /*
    let data = [
      { label: 'Application', sublabel: 'Nice', count: 2 },
      { label: 'Application', sublabel: 'poor', count: 1 },
      { label: 'Channels', sublabel: 'Quality', count: 2 },
      { label: 'Customer Care', sublabel: 'support', count: 2 },
    ];

    this.barChartLabels = Object.keys(data);
    this.barChartLabels.forEach((label) => {
      this.barChartData[0].data.push(data[label]['count']);
      this.barChartData[1].data.push(data[label]['count']);
    });
    */

    let data = [
      { label: 'Application', sublabel: 'Nice', count: 2 },
      { label: 'Application', sublabel: 'poor', count: 1 },
      { label: 'Channels', sublabel: 'Quality', count: 2 },
      { label: 'Customer Care', sublabel: 'support', count: 2 },
    ];

    let labels = [...new Set(data.map((x) => x.label))];
    let subLabels = [...new Set(data.map((x) => x.sublabel))];
    let subLabelDatasets = subLabels.map((x) => {
      let datasets = [];

      for (let label of labels) {
        datasets.push(
          data.find((y) => y.label == label && y.sublabel == x)?.count || 0
        );
      }

      return {
        label: x,
        data: datasets,
      };
    });

    // Alternative
    /*
    let subLabelDatasets = subLabels.map((x) => ({
      label: x,
      data: labels.map(
        (label) =>
          data.find((y) => y.label == label && y.sublabel == x)?.count || 0
      ),
    }));
    */

    this.barChartLabels = labels;
    this.barChartData = subLabelDatasets;

    console.log(this.barChartData);
  }
}
