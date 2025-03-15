import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '../Models/http_response';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(): Observable<HttpResponse> {
    // This definently is not correct
    // return this.http.get(`${your_api_url}/Data`, {observe:'response'})
    return this.http.get(`/assets/data.json`, { observe: 'response' }).pipe(
      map((res: any) => {
        let responseBody = res?.body;
        let result: HttpResponse;
        if (res.ok) {
          console.log(`inflow_data.service - 200 OK`);
          result = {
            status: res.status,
            data: responseBody.data,
            success: responseBody.success,
            message: responseBody.message,
          };
        } else {
          console.log(`inflow_data.service - Error! HttpStatus: ${res.status}`);
          result = {
            status: res.status,
            data: undefined,
            success: responseBody?.success,
            message: responseBody?.message,
          };
        }

        return result;
      })
    );
  }
}
