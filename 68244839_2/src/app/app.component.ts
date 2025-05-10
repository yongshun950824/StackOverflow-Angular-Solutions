import { Component, VERSION } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  global: boolean = false;
  country!: string;
  //data: GlobalData;
  dailyData: any[] = [];
  countries: any[] = [];
  lineChartData: any[] = [
    {
      data: [65, 64, 33, 44],
      label: 'Temp label'
    }
  ];
  public lineChartType: ChartType = "line";
  lineChartLabels: any[] = [
    'label01', 'label02', 'label03'
  ];
  barChartData: any[] = [
    {
      data: [65, 76, 33],
      label: 'Label'
    }
  ];
}
