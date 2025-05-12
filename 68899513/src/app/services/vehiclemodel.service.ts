import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleModelService {
  constructor(private http: HttpClient) {}

  public getParameters(): Observable<any> {
    // return this.http.get(this.api.baseURL + 'parameters', this.httpOptions);

    return this.http.get('assets/response.json');
  }
}
