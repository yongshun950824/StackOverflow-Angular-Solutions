import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class urlService {
  private map: Map<string, string>;

  constructor(private http: HttpClient) {
    this.map = new Map<string, string>();
  }

  public getUrl(id: string): Observable<string> {
    if (this.map.has(id)) {
      return of(this.map.get(id));
    }

    return (
      of({ url: 'sampleURL' })
        //this.http.get<any>(`...sampleURL...`)
        .pipe(
          map((result) => {
            this.map.set(id, result.url);

            return this.map.get(id);
          })
        )
    );
  }
}
