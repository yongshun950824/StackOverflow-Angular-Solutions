import { Component, OnInit } from '@angular/core';
import { ChartType, ScriptLoaderService } from 'angular-google-charts';
//import 'google.visualization';

//declare google as any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'component-overview';

  constructor(private loaderService: ScriptLoaderService) {}

  chart = {
    title: '',
    type: ChartType.LineChart,
    data: [
      [0, 0],
      [1, 2],
      [2, 1],
      [3, 4],
      [4, 2],
      [5, 8],
      [6, 3],
      [7, 16],
      [8, 4],
      [9, 32],
    ],
    columnNames: [
      { id: '', label: 'X', type: 'number' },
      { id: '', label: 'Y', type: 'number' },
    ],
    options: {
      pointSize: 4,
      animation: {
        startup: true,
        duration: 600,
        easing: 'in',
      },
      legend: 'none' as 'none' | google.visualization.ChartLegend,
      hAxis: {
        viewWindow: {
          min: 0,
          max: 9,
        },
      },
      vAxis: {
        viewWindow: {
          min: 0,
          max: 32,
        },
      },
      width: 448,
    },
  };

  ngOnInit() {
    this.loaderService.loadChartPackages().subscribe(() => {
      google.charts
        .load('current', {
          packages: ['corechart'],
        })
        .then(function () {
          var rawData = [
            [0, 0],
            [1, 2],
            [2, 1],
            [3, 4],
            [4, 2],
            [5, 8],
            [6, 3],
            [7, 16],
            [8, 4],
            [9, 32],
          ];
          var data = new google.visualization.DataTable({
            cols: [
              { id: '', label: 'X', type: 'number' },
              { id: '', label: 'Y', type: 'number' },
            ],
          });
          var options = {
            pointSize: 4,
            animation: {
              startup: true,
              duration: 600,
              easing: 'in',
            },
            legend: 'none' as 'none' | google.visualization.ChartLegend,
            hAxis: {
              viewWindow: {
                min: 0,
                max: 9,
              },
            },
            vAxis: {
              viewWindow: {
                min: 0,
                max: 32,
              },
            },
          };
          var chart = new google.visualization.LineChart(
            document.getElementById('chart_div')!
          );
          google.visualization.events.addListener(chart, 'ready', function () {
            drawChart();
          });
          var rowIndex = 0;
          drawChart();
          function drawChart() {
            if (rowIndex < rawData.length) {
              data.addRow(rawData[rowIndex++]);
              chart.draw(data, options);
            }
          }
        });
    });
  }
}
