import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNum'
})
export class FormatNumPipe implements PipeTransform {


  constructor(private decimalPipe: DecimalPipe) {
  }

  transform(input: number | string | null | undefined, digitsInfo?: string): string | null {
    return this.decimalPipe.transform(input, digitsInfo);
  }

}

