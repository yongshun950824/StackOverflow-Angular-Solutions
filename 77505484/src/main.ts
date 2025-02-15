import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { map, Observable } from 'rxjs';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div *ngFor="let item of data$ | async">
      <div>ID: {{ item.id }}</div>
      <div>Name: {{ item.name }}</div>
      <div>Age: {{ item.age }}</div>
      <ng-container *ngIf="item.jsonData">
        <div  *ngFor="let prop of item.jsonData | keyvalue">
          <div>{{ prop.key }}: {{ prop.value}}</div>
        </div>
      </ng-container>

      <br />
    </div>
  `,
  imports: [CommonModule],
})
export class App {
  data$!: Observable<any[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.data$ = this.http.get<any[]>('/assets/data.json').pipe(
      map((resp: any[]) =>
        resp.map((x: any) => ({
          ...x,
          jsonData: !!x.jsonData ? JSON.parse(x.jsonData) : null,
        }))
      )
    );
  }
}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
