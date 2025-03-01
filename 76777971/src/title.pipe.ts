import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
  standalone: true,
})
export class TitlePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value == 'Male' ? 'Mr.' : value == 'Female' ? 'Mrs.' : '';
  }
}
