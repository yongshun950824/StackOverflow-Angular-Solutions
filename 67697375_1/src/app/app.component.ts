import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public accordianData = [
    {
      id: 1,
      header: 'header1',
      content: 'example1'
    },
    {
      id: 2,
      header: 'header2',
      content: 'example2'
    },
    {
      id: 3,
      header: 'header3',
      content: 'example3'
    }
  ];
}
