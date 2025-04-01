import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDatePipe'
})
export class FormatDatePipePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {
  }

  transform(input: Date | string | null | undefined, format: string = 'dd/MM/yyyy'): string | null {

    if (typeof input === 'string' && /^\d{8}$/.test(input)) {
      input = input.substring(0,4) + '-' + input.substring(4,6) + '-' + input.substring(6,8);
    }

    try {
      return this.datePipe.transform(input, format, undefined);
    } catch {
      return '';
    }
  }
}