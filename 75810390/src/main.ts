import 'zone.js/dist/zone';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FruitService } from './fruit.service';
import { Chart } from 'chart.js/auto';
import { Fruit } from './fruit.model';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <canvas #baseChart class="chart"></canvas>
  <br />
  <button (click)="exportPdf()">Export to PDF</button>
  `,
  providers: [{ provide: 'Window', useValue: window }],
})
export class App {
  name = 'Angular';

  title = 'angular-fetch-json-data';
  public fruits: Fruit[];
  public chart: Chart;

  @ViewChild('baseChart', { static: true })
  canvasElem: ElementRef<HTMLCanvasElement>;

  public constructor(
    private fruitService: FruitService,
    @Inject('Window') private window: Window
  ) {}

  public ngOnInit(): void {
    this.fruitService.getFruits().subscribe((response) => {
      this.fruits = response.fruits;

      this.createChart();
    });
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    // Extract the labels and data from the fruits array
    const labels = this.fruits.map((fruit: any) => fruit.fruit);
    const data = this.fruits.map((fruit: any) => fruit.amountBought);

    const ctx = this.canvasElem.nativeElement.getContext('2d');
    this.chart = new Chart<'line'>(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            borderColor: '#3cba9f',
            fill: false,
          },
          {
            data: data,
            borderColor: '#ffcc00',
            fill: false,
          },
        ],
      },

      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: true,
          },

          y: {
            display: true,
            ticks: {
              beginAtZero: true,
            },
          },
        },
      } as ChartOptions<'line'>,
    });
  }

  pdfOptions = {
    value: {
      pageFormat: 'A4',
    },
  };

  exportPdf() {
    const pdf = new jsPDF({
      unit: 'px',
      format: [595, 842],
    });

    let img = this.canvasElem.nativeElement.toDataURL('image/png');
    pdf.addImage(img, 'PNG', 10, 10, 580, 300);

    pdf.save('Demo Print Chart into PDF');
  }
}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
