import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('jp');
    translate.use('jp');
  }

  name = 'Angular';

  width: number = 700;
  height: number = 300;
  fitContainer: boolean = false;

  view: any[] = [600, 400];
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  timeline = true;
  doughnut = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };
  //pie
  showLabels = true;
  // data goes here
public single = [
  {
    "name": "China",
    "value": 2243772
  },
  {
    "name": "USA",
    "value": 1126000
  },
  {
    "name": "Norway",
    "value": 296215
  },
  {
    "name": "Japan",
    "value": 257363
  },
  {
    "name": "Germany",
    "value": 196750
  },
  {
    "name": "France",
    "value": 204617
  }
];
public multi = [
  {
    "name": "China",
    "series": [
      {
        "name": "2018",
        "value": 2243772
      },
      {
        "name": "2017",
        "value": 1227770
      }
    ]
  },
  {
    "name": "USA",
    "series": [
      {
        "name": "2018",
        "value": 1126000
      },
      {
        "name": "2017",
        "value": 764666
      }
    ]
  },
  {
    "name": "Norway",
    "series": [
      {
        "name": "2018",
        "value": 296215
      },
      {
        "name": "2017",
        "value": 209122
      }
    ]
  },
  {
    "name": "Japan",
    "series": [
      {
        "name": "2018",
        "value": 257363
      },
      {
        "name": "2017",
        "value": 205350
      }
    ]
  },
  {
    "name": "Germany",
    "series": [
      {
        "name": "2018",
        "value": 196750
      },
      {
        "name": "2017",
        "value": 129246
      }
    ]
  },
  {
    "name": "France",
    "series": [
      {
        "name": "2018",
        "value": 204617
      },
      {
        "name": "2017",
        "value": 149797
      }
    ]
  }
];

}
