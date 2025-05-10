import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: `./rate.component.html`,
  styleUrls: ['./rate.component.css']
})
export class RateComponent  {
  starWidth: number = 0;

  rateProduct(rateValue: number) {
    this.starWidth = rateValue * 75 / 5;
  }
}
