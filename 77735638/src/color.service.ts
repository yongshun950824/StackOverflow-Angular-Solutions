import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
//import { Color } from '../model/color';
import { HttpClient } from '@angular/common/http';

export interface Color {
  id: number;
  number: string;
  name: string;
  imagePath: string;
  category: string;
  color: string;
  brand: string;
}

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  private productsUrl = 'http://localhost:5500/colors/';

  constructor(private http: HttpClient) {}

  getColors(): Observable<Color[]> {
    //var colors = this.http.get<Color[]>(this.productsUrl + 'all');
    return this.http
      .get<any>('assets/data.json')
      .pipe(map((resp: any) => resp.colors as Color[]));
  }
}
