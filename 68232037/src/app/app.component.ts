import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { ApiService } from './api.service';
import { ICountries, IResponse } from './response.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  countries: any[] = [];
  headers: HttpHeaders = null;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api
      .get('countries/list', this.headers)
      .subscribe((data: IResponse<ICountries>) => {
        this.countries = data.results.countries;
      });
  }
}
