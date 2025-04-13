import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  houseList: any[] = [
    { houseCode: '1234', street: 'Grove Street' },
    { houseCode: '5678', street: 'Pike Street' },
    { houseCode: '9010', street: 'Park Street' },
  ];

  ParkingIsTrue = true;

  ngOnInit() {
    for (let i = 0; i < this.houseList.length; i++) {
      if (i === 1) {
        this.houseList.splice(i, 0, {
          ...this.houseList[i],
          parking: this.ParkingIsTrue,
        });
      }
    }

    console.log(this.houseList);
  }
}
