import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  query: string;
  artists: any;

  showArtist(item: any) {
    this.query = item.name;
    item.highlight = !item.highlight;
  }

  constructor(private http: HttpClient) {
    this.query = '';
  }

  ngOnInit(): void {
    this.http.get<any>('../assets/data.json').subscribe((data) => {
      this.artists = data;
    });
  }
}
