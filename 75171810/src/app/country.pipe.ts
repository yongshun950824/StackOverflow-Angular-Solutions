import { Pipe, PipeTransform } from '@angular/core';
import { LineResetTable, Column } from './data';

@Pipe({ name: 'country' })
export class CountryPipe implements PipeTransform {
  transform(values: Column[], filter: string): Column[] {
    if (!filter || filter.length === 0) {
      return values;
    }

    if (values.length === 0) {
      return values;
    }

    return values.filter((value: Column) => {
      const nameFound =
        value.content.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
      if (nameFound) {
        return value;
      }
    });
  }
}
