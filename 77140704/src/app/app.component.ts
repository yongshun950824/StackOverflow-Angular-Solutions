import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DeviceEventStatistic } from './chart/model/event-statistics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public data$: any =
    this.http.get<DeviceEventStatistic[]>('assets/states.json');
  constructor(private http: HttpClient) {}
}
