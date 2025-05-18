import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {
  NgbDateAdapter,
  NgbDateNativeAdapter,
  NgbCalendar,
  NgbDate,
  NgbDatepicker,
  NgbDatepickerModule,
  NgbDateParserFormatter,
  NgbModule,
  NgbInputDatepicker,
} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngbd-datepicker-custommonth',
  standalone: true,
  imports: [
    NgbDatepickerModule,
    NgbModule,
    CommonModule,
  ],
  templateUrl: './datepicker-custommonth.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgbdDatepickerCustommonth implements OnInit {
  model: NgbDate;
  startDate: NgbDate;
  minDate: NgbDate;
  maxDate: NgbDate;

  @Output() dateSelect = new EventEmitter<NgbDate>();

  constructor(private ngbCalendar: NgbCalendar) {}

  ngOnInit() {
    this.startDate = this.ngbCalendar.getToday();
    this.minDate = this.ngbCalendar.getNext(this.startDate, 'y', -2);
    this.minDate.day = 1;
    this.model = this.startDate;
    this.maxDate = this.ngbCalendar.getNext(this.minDate, 'y', 4); // Use NgbCalendar for date manipulation
  }
  navigate(datepicker: NgbDatepicker, number: number) {
    const newDate = this.ngbCalendar.getNext(
      datepicker.state.firstDate,
      'm',
      number
    );
    if (newDate.before(this.minDate!) || newDate.after(this.maxDate!)) {
      return; // Prevent navigation outside the allowed range
    }
    datepicker.navigateTo(newDate);
  }

  today(datepicker: NgbDatepicker) {
    const { calendar } = datepicker;
    datepicker.navigateTo(calendar.getToday());
  }

  getMonthName(month: NgbDate): string {
    return new Intl.DateTimeFormat('en-us', {
      month: 'short',
      year: 'numeric',
    }).format(new Date(month.year, month.month - 1));
  }

  selectMonth(month: NgbDate, datepicker?: NgbInputDatepicker) {
    this.model = month;
    this.dateSelect.emit(month); // Emit selected month
    // this doesn't work either..
    if (datepicker) {
      datepicker.toggle();
    }
  }

  isSelected(month: NgbDate): boolean {
    return month.year === this.model.year && month.month === this.model.month;
  }

  get currentYear(): number {
    return this.model.year;
  }

  onDateSelect(event: any) {
    console.log(event);
  }
}
