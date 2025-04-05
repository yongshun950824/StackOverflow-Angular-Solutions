import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positiveNegativeColorClass'
})
export class PositiveNegativeColorClassPipe implements PipeTransform {

  transform(input: number | undefined | null | string): string {
    if (input) {
      const value = parseFloat(input.toString())
      if (value > 0) {
        return 'text-success';
      }
      if (value < 0) {
        return 'text-danger';
      }
    }
    return '';
  }
}