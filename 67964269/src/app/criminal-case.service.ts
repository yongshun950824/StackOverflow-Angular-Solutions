import { Injectable } from '@angular/core';
import { Page } from './page.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagedData } from './paged-data';
import { CriminalCase } from './criminal-case.class';
import { map } from 'rxjs/operators';

@Injectable()
export class CriminalCaseService {
  constructor(private http: HttpClient) {}

  getResults(page: Page): Observable<PagedData<CriminalCase>> {
    return this.http
      .get<CriminalCase[]>('/assets/data.json')
      .pipe(map(d => this.getPagedData(page, d)));
  }

  private getPagedData(page: Page, data: CriminalCase[]): PagedData<CriminalCase> {
    const pagedData = new PagedData<CriminalCase>();
    page.totalElements = data.length;
    page.totalPages = page.totalElements / page.size;
    const start = page.pageNumber * page.size;
    const end = Math.min(start + page.size, page.totalElements);
    for (let i = start; i < end; i++) {
      pagedData.results.push(data[i]);
    }
    pagedData.page = page;
    return pagedData;
  }
}
