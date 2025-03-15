import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { User } from './Models/user';
import { ApiService } from './Services/api.service';
import { HttpResponse } from './Models/http_response';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    {{ dataSource | json }}
  `,
})
export class App {
  name = 'Angular';

  dataSource: User[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getData().subscribe((response: HttpResponse) => {
      console.log(
        `Http response was - Status: ${response.status} Success: ${response.success} Data: ${response.data}`
      );

      if (response.success) {
        this.dataSource.push(response.data);
      }
    });
  }
}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
