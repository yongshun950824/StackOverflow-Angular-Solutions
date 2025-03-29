import { Component, VERSION } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  toolTip: string;
  show = false;
  handle: any;

  async mouseover(params) {
    this.handle = setTimeout(() => {
      this.checkSaldo(10, 'FRA').then((x) => {
        this.toolTip = x;
        this.show = true;
      });
    }, 4000);
  }

  checkSaldo(amount: any, currencyCode: any): Promise<string> {
    return new Promise((resolve) => {
      // this.restService
      //   .getByParam('recalculatedSaldo', {
      //     amount: amount,
      //     currency: currencyCode,
      //   })
      //   .subscribe((response) => {
      //     resolve(response.payload);
      //   });

      of(`${currencyCode}: ${amount}`)
        //.pipe(delay(3000))
        .subscribe((response) => {
          resolve(response);
        });
    });
  }
}
