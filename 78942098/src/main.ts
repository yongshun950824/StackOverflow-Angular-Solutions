import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AgCharts } from 'ag-charts-angular';
import {
  AgChartLegendClickEvent,
  AgChartLegendDoubleClickEvent,
  AgChartOptions,
} from 'ag-charts-community';

export function getData() {
  return [
    {
      quarter: "Q1'18",
      iphone: 140,
      mac: 16,
      ipad: 14,
      wearables: 12,
      services: 20,
    },
    {
      quarter: "Q2'18",
      iphone: 124,
      mac: 20,
      ipad: 14,
      wearables: 12,
      services: 30,
    },
    {
      quarter: "Q3'18",
      iphone: 112,
      mac: 20,
      ipad: 18,
      wearables: 14,
      services: 36,
    },
    {
      quarter: "Q4'18",
      iphone: 118,
      mac: 24,
      ipad: 14,
      wearables: 14,
      services: 36,
    },
  ];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgCharts],
  template: `<ag-charts
        [options]="options"      
    ></ag-charts>
    `,
})
export class App {
  public options: AgChartOptions;

  axes: any[] = [
    { type: 'quarter', position: 'left' },
    { type: 'number', position: 'bottom' },
  ];

  constructor() {
    this.options = {
      title: {
        text: "Apple's Revenue by Product Category",
      },
      subtitle: {
        text: 'In Billion U.S. Dollars',
      },
      data: getData(),
      series: [
        {
          type: 'bar',
          direction: 'horizontal',
          xKey: 'quarter',
          yKey: 'iphone',
          yName: 'iPhone',
          //visible: true,
        },
        {
          type: 'bar',
          direction: 'horizontal',
          xKey: 'quarter',
          yKey: 'mac',
          yName: 'Mac',
          //visible: true,
        },
        {
          type: 'bar',
          direction: 'horizontal',
          xKey: 'quarter',
          yKey: 'ipad',
          yName: 'iPad',
          //visible: true,
        },
        {
          type: 'bar',
          direction: 'horizontal',
          xKey: 'quarter',
          yKey: 'wearables',
          yName: 'Wearables',
          //visible: true,
        },
        {
          type: 'bar',
          direction: 'horizontal',
          xKey: 'quarter',
          yKey: 'services',
          yName: 'Services',
          //visible: true,
        },
      ],
      axes: this.axes,
      legend: {
        listeners: {
          legendItemClick: (event: AgChartLegendClickEvent) => {
            this.onLegendItemClick(event);
          },
          legendItemDoubleClick: (event: AgChartLegendDoubleClickEvent) => {
            this.onLegendItemClick(event);
          },
        },
      },
    };
  }

  onLegendItemClick(event: any) {
    // Default visible: true if visible is undefined
    this.options.series = this.options.series!.map((x: any) => ({
      ...x,
      visible: x.visible === undefined ? true : x.visible,
    }));

    switch (event.type) {
      case 'click':
        (this.options.series!.find(
          (x: any) => x.yKey == event.itemId
        ) as any)!.visible = event.enabled;

        break;

      case 'dblclick':
        this.options.series = this.options.series!.map((x: any) => ({
          ...x,
          visible: !x.visible,
        }));

        (this.options.series!.find(
          (x: any) => x.yKey == event.itemId
        ) as any)!.visible = event.enabled;

        break;
    }

    const allSeriesDisabled = this.options.series!.every(
      (e: any) => !e.visible
    );

    // Remove all axes when all series' visible false
    if (allSeriesDisabled) {
      this.options = {
        ...this.options,
        axes: [],
      };
    } else {
      this.options = {
        ...this.options,
        axes: this.axes,
      };
    }
  }
}

bootstrapApplication(App);
