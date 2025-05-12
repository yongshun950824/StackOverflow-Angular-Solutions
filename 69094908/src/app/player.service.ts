import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient) {}
  rootURL = '/api';
  getPlayers(): Observable<Player[]> {
    //return this.http.get<Player[]>(this.rootURL+ '/players')
    //  .pipe(map((response: any) => response.data as Player[]));
    return this.http
      .get('/assets/data.json')
      .pipe(map((response: any) => response.data as Player[]));
  }
}
