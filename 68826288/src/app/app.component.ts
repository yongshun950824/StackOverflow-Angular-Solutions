import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  elements = [
    {
      name: 'Item Red',
      color: 'red',
      fontSize: 20,
      row: '1',
      column: '2'
    },
    {
      name: 'Item Green',
      color: 'green',
      fontSize: 20,
      row: '1',
      column: '3'
    },
    {
      name: 'Item white',
      color: 'white',
      fontSize: 20,
      row: '2',
      column: '1'
    },
    {
      name: 'Item Blue',
      color: 'blue',
      fontSize: 16,
      row: '1',
      column: '1'
    }
  ];

  // styleObject(color: string, fontSize: number): Object {
  //   return { color: color, 'font-size': fontSize + 'px' };
  // }

  styleObject(row: String, Column: String): Object {
    let obj: Object;
    obj = { 'grid-row': '' + Number(row), 'grid-column': '' + Number(Column) };

    return obj;
  }
}
