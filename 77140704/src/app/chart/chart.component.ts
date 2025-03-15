import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { DeviceEventStatistic } from './model/event-statistics';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnChanges {
  public chart: any;

  @Input() public dataSource: DeviceEventStatistic[];

  constructor() {
    Chart.register(...registerables);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (
      this.chart === undefined &&
      changes.dataSource?.currentValue?.length > 0
    ) {
      this.createChart(changes.dataSource.currentValue);
      return;
    }

    if (this.chart) {
      this.updateChart(changes.dataSource.currentValue);
    }
  }

  private createChart(data: DeviceEventStatistic[]): void {
    if (data) {
      let sortedDates = data.map(x => x.periodStartTime).sort();

      let minDate = sortedDates[0];
      let maxDate = sortedDates[sortedDates.length - 1];

      const mergedKeys = this.getChartKeys(data);

      const chartGenericDataSets = this.generateChartData(mergedKeys);

      this.chart = new Chart('eventsChart', {
        type: 'bar',
        data: {
          datasets: chartGenericDataSets,
        },
        options: {
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
              },
              min: minDate,
              max: maxDate
            },
          },
          aspectRatio: 2,
          maintainAspectRatio: false,
          responsive: true,
        },
      });
    }
  }

  private updateChart(data: DeviceEventStatistic[]): void {
    const mergedKeys = this.getChartKeys(data);

    this.chart.config.data.datasets = this.generateChartData(mergedKeys);
    this.chart.update();
  }

  private generateChartData(keys: string[]) {
    return keys.map((key: string, i: number) => {
      return {
        label: key,
        data: this.dataSource,
        parsing: {
          xAxisKey: 'periodStartTime',
          yAxisKey: `keyStats.${key}`,
        },
        backgroundColor: labelColor[key],
      };
    });
  }

  private getChartKeys(data: DeviceEventStatistic[]): string[] {
    const keys = data
      .map((d: DeviceEventStatistic) => {
        if (d.keyStats) {
          return Object.keys(d.keyStats);
        }
      })
      .filter((k) => k);

    // merge keys here
    return Array.from(
      new Set(
        keys.reduce(
          (previousValue, currentValue) =>
            previousValue?.concat(currentValue ? currentValue : ''),
          []
        )
      )
    );
  }
}

export const labelColor = {
  downloadNok: 'maroon',
  evtUpdNok: 'red',
  evtUpdStr: 'navy',
  updDwldNok: 'maroon',
  updDwldOk: 'olive',
  updDwldStr: 'blue',
  evtUpdOk: 'green',
  updAbrt: 'purple',
  condCheckFailed: 'orange',
  condCheckOk: 'lime',
  avalChkIstl: 'limegreen',
  evtWCNotConn: 'orange',
  invUnk: 'orange',
  comMissing: 'orange',
  evtComLoginFail: 'orange',
  updTransmissionStart: 'blue',
  updTransmissionNok: 'maroon',
  updTransmissionOk: 'green',
  pkgRevDevNok: 'orange',
  evtUpdFileFmt: 'orange',
  downloaded: 'gray',
};
