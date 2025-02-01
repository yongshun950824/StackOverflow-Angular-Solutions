import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentence_lize',
  standalone: true,
})
export class SentencelizePipe implements PipeTransform {
  transform(value: string | null): string {
    return (value && value.charAt(0).toUpperCase() + value.slice(1)) ?? '';
  }
}
