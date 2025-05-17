import { Component } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import more from 'highcharts/highcharts-more';
more(Highcharts);

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      animation: false,
      backgroundColor: 'rgba(0,0,0,0.0)',
      events: {},
      marginRight: 45,
      spacing: [10, 10, 0, 10],
      style: {
        fontFamily:
          'adobe-clean, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      },
      type: 'bubble',
      plotBorderWidth: 1,
      zoomType: 'xy',
    },
    time: {
      useUTC: false,
    },
    title: {},
    xAxis: [
      {
        title: null,
        //"categories": [],
        crosshair: {
          width: 2,
          color: 'gray',
          dashStyle: 'Dot',
        },
        gridLineWidth: 0,
        labels: {
          style: {
            color: '#b4b4b4',
            fontSize: '12px',
          },
        },
        lineWidth: 2,
        lineColor: '#4b4b4b',
        index: 0,
        isX: true,
      },
    ],
    yAxis: {
      title: null,
    },
    colors: [
      '#26C0C7',
      '#E68619',
      '#D83790',
      '#8B572A',
      '#417505',
      '#BD10E0',
      '#50E3C2',
      '#F5A623',
      '#4A90E2',
      '#B8E986',
    ],
    tooltip: {
      animation: false,
      backgroundColor: '#ffffff',
      borderWidth: 0,
      style: {
        color: '#b4b4b4',
        fontSize: '14px',
      },
      shared: false,
      useHTML: true,
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
    },
    plotOptions: {
      area: {
        lineWidth: 1.5,
        marker: {
          fillColor: '#ffffff',
          enabled: false,
          lineColor: null,
          lineWidth: 0.75,
          radius: 1.25,
          symbol: 'circle',
        },
        states: {
          hover: {
            enabled: true,
            halo: null,
            lineWidthPlus: 0,
          },
          inactive: {
            opacity: 1,
          },
        },
      },
      line: {
        lineWidth: 1.5,
        marker: {
          fillColor: '#ffffff',
          enabled: false,
          lineColor: null,
          lineWidth: 0.75,
          radius: 1.25,
          symbol: 'circle',
        },
        states: {
          hover: {
            enabled: true,
            halo: null,
            lineWidthPlus: 0,
          },
          inactive: {
            opacity: 1,
          },
        },
      },
      spline: {
        lineWidth: 1.5,
        marker: {
          fillColor: '#ffffff',
          enabled: false,
          lineColor: null,
          lineWidth: 0.75,
          radius: 1.25,
          symbol: 'circle',
        },
        states: {
          hover: {
            enabled: true,
            halo: null,
            lineWidthPlus: 0,
          },
          inactive: {
            opacity: 1,
          },
        },
      },
    },
    series: [
      {
        type: 'bubble',
        data: [
          [0.0241, 40070.17, 0.95],
          [0.0649, 37645.26, 0.17],
          [0.0103, 34291.57, 0.23],
          [0.0281, 31747, 0.39],
          [0.0841, 30554.46, 0.01],
          [0.0552, 30042.96, 0.26],
          [0.0363, 29937.93, 0.97],
          [0.0474, 28694.46, 0.4],
          [0.0418, 26940.2, 0.15],
          [0.0098, 26395.51, 0.08],
          [0.0516, 22637.79, 1],
          [0.0131, 21316.61, 0.02],
          [0.0888, 20063.01, 0.78],
          [0.0099, 18296.38, 0],
          [0.1404, 17899.87, 0.59],
        ],
      },
    ],
  } as any;
}
