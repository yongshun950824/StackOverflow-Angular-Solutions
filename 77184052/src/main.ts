import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import { NgChartsModule } from 'ng2-charts';
import { delay, of } from 'rxjs';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  template: `
  <h2>With NG2-Charts directive (Solution 1)</h2>
  <div class="canvas">
    <canvas id="canvas" baseChart [data]="barChartData" [options]="barChartOptions"     
      [plugins]="barChartPlugins"
      [legend]="barChartLegend" [type]="'bar'">
    </canvas>
  </div>

  <h2>With Charts.JS (Solution 2)</h2>
  <div class="canvas">
    <canvas id="canvas2" baseChart>
    </canvas>
  </div>
  `,
})
export class App {
  name = 'Angular';
  barChartData!: ChartData<'bar'>;
  apiResponse!: any;
  barChartOptions!: ChartOptions<'bar'>;
  barChartPlugins!: any;
  barChartLegend = true;

  ngOnInit() {
    this.barChartOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
    this.barChartPlugins = {};

    of({
      Private: 6,
      data_1: 15,
    })
      .pipe(delay(200))
      .subscribe((resp) => {
        this.apiResponse = resp;

        // Solution 1
        this.barChartData = {
          labels: ['Private', 'NASHA', 'NHIS', 'Others'],
          datasets: [
            {
              data: [this.apiResponse?.Private, this.apiResponse?.data_1],

              label: 'hey',
              backgroundColor: ['#E8E2F4', "#000"],
            },
          ],
        };

        // Solution 2
        new Chart('canvas2', {
          type: 'bar',
          data: {
            labels: ['Private', 'NASHA', 'NHIS', 'Others'],
            datasets: [
              {
                data: [this.apiResponse?.Private, this.apiResponse?.data_1],

                label: 'hey',
                backgroundColor: ['#E8E2F4'],
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        } as ChartConfiguration<'bar'>);
      });
  }
}

bootstrapApplication(App);
