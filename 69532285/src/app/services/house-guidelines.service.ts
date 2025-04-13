import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HouseGuidelineResponse } from '../models/house-guideline-response';

@Injectable({
  providedIn: 'root',
})
export class HouseGuidelinesService {
  private readonly houseGuidelinesURL = 'http://localhost8200/homeguidelines';

  constructor(private http: HttpClient) {}

  getHouseData(houseCode: string): Observable<HouseGuidelineResponse[]> {
    // return this.http
    //   .get<HouseGuidelineResponse[]>(this.houseGuidelinesURL + '/', {
    //     headers: { houseCodeList: houseCode },
    //   })
    //   .pipe(map((response: any) => response.dataList));

    return this.http
      .get<HouseGuidelineResponse[]>('/assets/data.json', {
        headers: { houseCodeList: houseCode },
      })
      .pipe(map((response: any) => response.dataList));
  }
}
