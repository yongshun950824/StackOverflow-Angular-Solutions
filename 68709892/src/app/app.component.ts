import { Component, VERSION } from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

import {
  create,
  options,
  useTheme,
  color
} from '@amcharts/amcharts4/core';
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  _tooltipText = '';

  data = [
    {
      resourceKey: 'John',
      startTime: '2018-01-01 08:00',
      endTime: '2018-01-01 10:00'
      //color: colorSet.getIndex(0).brighten(0)
    },
    {
      resourceKey: 'John',
      startTime: '2018-01-01 12:00',
      endTime: '2018-01-01 15:00'
      //color: colorSet.getIndex(0).brighten(0.4)
    },
    {
      resourceKey: 'John',
      startTime: '2018-01-01 15:30',
      endTime: '2018-01-01 21:30'
      //color: colorSet.getIndex(0).brighten(0.8)
    },

    {
      resourceKey: 'Jane',
      startTime: '2018-01-01 09:00',
      endTime: '2018-01-01 12:00'
      //color: colorSet.getIndex(2).brighten(0)
    },
    {
      resourceKey: 'Jane',
      startTime: '2018-01-01 13:00',
      endTime: '2018-01-01 17:00'
      //color: colorSet.getIndex(2).brighten(0.4)
    },

    {
      resourceKey: 'Peter',
      startTime: '2018-01-01 11:00',
      endTime: '2018-01-01 16:00'
      //color: colorSet.getIndex(4).brighten(0)
    },
    {
      resourceKey: 'Peter',
      startTime: '2018-01-01 16:00',
      endTime: '2018-01-01 19:00'
      //color: colorSet.getIndex(4).brighten(0.4)
    }
  ];

  ngAfterViewInit() {
    // Reference : https://www.amcharts.com/demos/gantt-chart/
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.paddingRight = 30;
    chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd HH:mm';

    let colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.4;

    chart.data = this.data;

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'resourceKey';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dateFormatter.dateFormat = 'yyyy-MM-dd HH:mm';
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 30, timeUnit: 'minute' };
    dateAxis.max = new Date(2018, 0, 1, 24, 0, 0, 0).getTime();
    dateAxis.strictMinMax = true;
    dateAxis.renderer.tooltipLocation = 0;

    // let series1 = chart.series.push(new am4charts.ColumnSeries());
    // series1.columns.template.width = am4core.percent(80);
    // series1.columns.template.tooltipText = '{name}: {openDateX} - {dateX}';

    // series1.dataFields.openDateX = 'startTime';
    // series1.dataFields.dateX = 'endTime';
    // series1.dataFields.categoryY = 'resourceKey';
    // series1.columns.template.propertyFields.fill = 'color'; // get color from data
    // series1.columns.template.propertyFields.stroke = 'color';
    // series1.columns.template.strokeOpacity = 1;

    let series1 = chart.series.push(this.createColumnSeries('', this.data));

    chart.scrollbarX = new am4core.Scrollbar();
  }

  private createColumnSeries(
    name: string,
    //seriesData: am4charts.GanttChartPoint[]
    seriesData: any[]
  ): am4charts.ColumnSeries {
    const series = new am4charts.ColumnSeries();

    //const colorForColumn = color(this.colorMap.get(name));
    const colorForColumn = color('#fcba03');

    // ERROR: series.stroke is not a function
    // series.stroke(colorForColumn);
    // ERROR: series.fill  is not a function
    // series.fill(colorForColumn);

    // ERROR: series.columns.template.stroke is not a function
    // series.columns.template.stroke(colorForColumn);
    // ERROR: series.columns.template.fill is not a function
    // series.columns.template.fill(colorForColumn);

    // WORKS!
    series.columns.template.stroke = colorForColumn;
    series.columns.template.fill = colorForColumn;
    series.strokeOpacity = 1;

    series.data = seriesData;

    series.columns.template.width = am4core.percent(70);

    //series.dataFields.openValueX = `startTime`;
    series.dataFields.openDateX = `startTime`;
    //series.dataFields.valueX = `endTime`;
    series.dataFields.dateX = `endTime`;
    series.dataFields.categoryY = 'resourceKey';
    series.columns.template.tooltipText = this._tooltipText;

    return series;
  }
}
