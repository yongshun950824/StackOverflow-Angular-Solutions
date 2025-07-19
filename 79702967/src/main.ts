import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import * as Highcharts from 'highcharts';
import 'highcharts/modules/drilldown';
import {
  HighchartsChartDirective,
  HighchartsChartComponent,
  ChartConstructorType,
} from 'highcharts-angular';
import 'highcharts/modules/map';
import 'highcharts/modules/tiledwebmap';
import { appConfig } from './app.config';

@Component({
  selector: 'app-root',
  template: `
    <div id="mapContainer" #mapContainer>
      <highcharts-chart
        id="container"
        [constructorType]="chartConstructor"
        [options]="chartOptions"
      >
      </highcharts-chart>
    </div>
  `,
  imports: [HighchartsChartDirective, HighchartsChartComponent],
})
export class App {
  chartConstructor: ChartConstructorType = 'mapChart';
  chartOptions: Highcharts.Options = {};

  ngOnInit(): void {
    const availableSeries = Object.keys((Highcharts as any).seriesTypes || {});
    console.log('Available Highcharts series types:', availableSeries);

    this.chartOptions = {
      chart: {
        margin: 0,
      },

      title: {
        text: '',
      },

      subtitle: {
        text: '',
      },

      navigation: {
        buttonOptions: {
          align: 'left',
          theme: {
            stroke: '#e6e6e6',
          },
        },
      },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          alignTo: 'spacingBox',
        },
      },

      mapView: {
        center: [10.73028454146517, 59.91261204279989],
        zoom: 13,
      },

      tooltip: {
        pointFormat: '{point.name}',
      },

      legend: {
        enabled: true,
        title: {
          text: 'Attractions in Oslo',
        },
        align: 'left',
        symbolWidth: 20,
        symbolHeight: 20,
        itemStyle: {
          textOutline: '1 1 1px rgba(255,255,255)',
        },
        backgroundColor: `color-mix(
            in srgb,
            var(--highcharts-background-color, white),
            transparent 15%
        )`,
        //float: true,
        borderRadius: 2,
        itemMarginBottom: 5,
      },

      plotOptions: {
        mappoint: {
          dataLabels: {
            enabled: false,
          },
        },
      },

      series: [
        {
          type: 'tiledwebmap',
          name: 'Basemap Tiles',
          provider: {
            type: 'OpenStreetMap',
          },
          showInLegend: false,
        },
        {
          type: 'mappoint',
          name: 'Museums',
          marker: {
            symbol:
              'url(https://www.highcharts.com/samples/graphics/museum.svg)',
            width: 24,
            height: 24,
          },
          data: [
            {
              name: 'Fram Museum',
              lon: 10.69299,
              lat: 59.90199,
            },
            {
              name: 'Vigeland Museum',
              lon: 10.70013,
              lat: 59.92285,
            },
            {
              name: 'Norwegian Museum of Cultural History',
              lon: 10.6849,
              lat: 59.90414,
            },
            {
              name: 'The Viking Ship Museum (Vikingskipshuset)',
              lon: 10.68446,
              lat: 59.90475,
            },
            {
              name: 'Museum of Cultural History',
              lon: 10.73547,
              lat: 59.9168,
            },
            {
              name: 'The Astrup Fearnley Museum of Modern Art',
              lon: 10.72086,
              lat: 59.90706,
            },
            {
              name: 'Munch Museum',
              lon: 10.75565,
              lat: 59.90616,
            },
            {
              name: 'Natural History Museum at the University of Oslo',
              lon: 10.7717,
              lat: 59.9198,
            },
          ],
        },
        {
          type: 'mappoint',
          name: 'Parks',
          marker: {
            symbol: 'url(https://www.highcharts.com/samples/graphics/tree.svg)',
            width: 24,
            height: 24,
          },
          data: [
            {
              name: 'The Vigeland Park',
              lon: 10.70514,
              lat: 59.92448,
            },
            {
              name: 'Frogner Park',
              lon: 10.70347,
              lat: 59.92645,
            },
            {
              name: "The University's Botanical Garden",
              lon: 10.7699,
              lat: 59.9174,
            },
          ],
        },
        {
          type: 'mappoint',
          name: 'Great buildings',
          marker: {
            symbol:
              'url(https://www.highcharts.com/samples/graphics/building.svg)',
            width: 24,
            height: 24,
          },
          data: [
            {
              name: 'The Norwegian National Opera & Ballet',
              lon: 10.75182,
              lat: 59.90766,
            },
            {
              name: 'Akershus Fortress',
              lon: 10.73601,
              lat: 59.90766,
            },
            {
              name: 'Royal Palace in Oslo',
              lon: 10.7275,
              lat: 59.91694,
            },
            {
              name: 'Oslo City Hall',
              lon: 10.73358,
              lat: 59.91176,
            },
            {
              name: 'Akrobaten bru',
              lon: 10.75965,
              lat: 59.90971,
            },
          ],
        },
        {
          type: 'mappoint',
          name: 'Restaurants',
          marker: {
            symbol: 'url(https://www.highcharts.com/samples/graphics/eat.svg)',
            width: 24,
            height: 24,
          },
          data: [
            {
              name: 'Elias mat & sånt',
              lon: 10.73868,
              lat: 59.91631,
            },
            {
              name: 'Østbanehallen renovated train station & food court',
              lon: 10.75109,
              lat: 59.91085,
            },
          ],
        },
      ],
    };
  }
}

bootstrapApplication(App, appConfig);
