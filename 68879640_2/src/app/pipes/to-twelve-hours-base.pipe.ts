import { Pipe } from '@angular/core';
//import * as moment from 'moment';
import moment from "moment";

@Pipe({ name: 'ToTwelveHoursBase' })
export class ToTwelveHoursBasePipe {
  transform(value: string): string {
    return moment(value, 'HH:mm').format('hh:mm A');
  }
}
