import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

@Injectable()
export class TextService {
  private _url = 'http://localhost:8080';
  //private _textsUrl = 'http://localhost:8080/texts';
  private _textsUrl = '/assets/texts.json';

  constructor(private _hc: HttpClient) {}

  findAll(): Observable<Text[]> {
    return this._hc.get<Text[]>(this._textsUrl);
  }

  checkIfTitleExists(testedTitle: string): Observable<boolean> {
    return this.findAll().pipe(
      map((texts) => texts.findIndex((t) => t.title == testedTitle) > -1)
    );
  }

  save(text: Text): Observable<any> {
    return of({});
  }
}

export class Text {
  title: string;
  substitle: string;
  content: string;
}
