import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng2-charts-demo';

  barChartData: any = {
    datasets: [],
    labels: [],
  };
  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  data = [
    {
      value1: 8,
      value2: 9,
      weekday: '2023-02-27',
    },
    {
      value1: 8,
      value2: 9,
      weekday: '2023-02-28',
    },
    {
      value1: 8,
      value2: 9,
      weekday: '2023-03-01',
    },
    {
      value1: 8,
      value2: 5,
      weekday: '2023-03-02',
    },
    {
      value1: 8,
      value2: 9,
      weekday: '2023-03-03',
    },
  ];

  ngOnInit() {
    this.setData();
  }

  setData() {
    let data_value1: any[] = [];
    let data_value2: any[] = [];
    let labels: any[] = [];
    this.data.forEach((entry) => {
      data_value1.push(entry['value1']);
      data_value2.push(entry['value2']);
      labels.push(this.getDayofWeek(entry['weekday']));
    });

    this.barChartData.labels = labels;

    let dataSet1: any = {
      data: data_value1,
      label: 'Label 1',
    };

    let dataSet2: any = {
      data: data_value2,
      label: 'Label 2',
    };

    this.barChartData.datasets.push(dataSet1);
    this.barChartData.datasets.push(dataSet2);
    console.log(this.barChartData);
  }

  getDayofWeek(date: any) {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek)
      ? null
      : [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ][dayOfWeek];
  }

  // public barChartLegend = true;
  // public barChartPlugins = [];

  // public barChartData: ChartConfiguration<'bar'>['data'] = {
  //   labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  //   datasets: [
  //     { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
  //     { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
  //   ]
  // };

  // public barChartOptions: ChartConfiguration<'bar'>['options'] = {
  //   responsive: false,
  // };

  constructor() {}
}
