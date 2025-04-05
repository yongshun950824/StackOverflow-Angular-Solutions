import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from './country';

@Injectable()
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    // return this.http.get<Country[]>('http://127.0.0.1:3300/api/v1/countries/');

    return this.http
      .get<ICountryListResponse>('/assets/data.json')
      .pipe(map((response: ICountryListResponse) => response.data.data));
  }
}

export interface ICountryListResponse {
  status: string;
  results: number;
  data: { data: Country[] };
}
