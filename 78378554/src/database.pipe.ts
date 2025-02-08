import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'userPipe',
  pure: false,
  standalone: true,
})
export class databasePipe implements PipeTransform {
  transform(values: User[], filters: string[]): User[] {
    if (!filters || filters.length === 0 || values.length === 0) {
      return values;
    }

    return values.filter((value: User) => {
      return filters.some((filter) => {
        const userNameFound =
          value.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        const userSurnameFound =
          value.surname.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        const ageFound =
          value.age.toLowerCase().indexOf(filter.toLowerCase()) !== -1;

        return userNameFound || userSurnameFound || ageFound;
      });
    });
  }
}
