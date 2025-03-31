import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Heroe } from '../interface/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  //private baseUrl: string = environment.baseUrl;
  private baseUrl: string = '';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Heroe[]> {
    //return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
    return this.http.get<Heroe[]>('/assets/heroes.json');
  }

  getHeroesPorId(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }
}
