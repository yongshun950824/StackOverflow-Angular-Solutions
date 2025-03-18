import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Tile } from './tile';
@Injectable({
  providedIn: 'root',
})
export class TileService {
  constructor(private http: HttpClient) {}
  showTile() {
    return this.http
      .get<Tile[]>('/assets/data.json')
      .pipe(map((response: any) => response.data));
  }
}
