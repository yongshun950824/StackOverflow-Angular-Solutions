import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
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
  params: any;
  message = '';

  @ViewChild('first_span') elem: ElementRef;

  async mouseover(params) {
    this.handle = setTimeout(() => {
      this.checkSaldo(10, 'FRA').then((x) => {
        this.toolTip = x;
        this.show = true;

        if (this.toolTip && this.elem && this.elem.nativeElement)
          this.elem.nativeElement.setAttribute('title', this.toolTip);
      });

      this.message = 'On mouseover';
    }, 4000);
  }

  out() {
    this.show = false;
    this.toolTip = null;

    if (this.elem && this.elem.nativeElement) {
      let element = this.elem.nativeElement as HTMLElement;

      element.attributes.getNamedItem('title') &&
        element.attributes.removeNamedItem('title');
    }

    this.message = 'On mouseout';
    clearTimeout(this.handle);
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
