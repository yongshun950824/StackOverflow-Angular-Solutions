import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [FormsModule],
})
export class App {
  startDate: Date | null = null;
  endDate: Date | null = null;

  @Output() dateRangeSelected = new EventEmitter<{
    startDate: Date;
    endDate: Date;
  }>();

  @ViewChild('datepickerRangeStart', { static: false })
  startDateInput!: ElementRef;
  @ViewChild('datepickerRangeEnd', { static: false }) endDateInput!: ElementRef;

  constructor(/*private translate: TranslateService*/) {}

  onStartDateChange(event: any): void {
    console.log('--- Start date change event:', event);
    this.startDate = event.target.value ? new Date(event.target.value) : null;
    this.emitDateRangeIfComplete();
  }

  onEndDateChange(event: any): void {
    console.log('--- End date change event:', event);
    this.endDate = event.target.value ? new Date(event.target.value) : null;
    this.emitDateRangeIfComplete();
  }

  // Emits only when both start and end date are chosen
  private emitDateRangeIfComplete(): void {
    if (this.startDate && this.endDate) {
      this.dateRangeSelected.emit({
        startDate: this.startDate,
        endDate: this.endDate,
      });
      console.log('-- Emit function runs');
    }
  }

  ngAfterViewInit() {
    this.startDateInput.nativeElement.addEventListener(
      'changeDate',
      (e: Event) => {
        const input = e.target as HTMLInputElement;
        console.log('Start date is: ' + input.value);
      }
    );

    this.endDateInput.nativeElement.addEventListener(
      'changeDate',
      (e: Event) => {
        const input = e.target as HTMLInputElement;
        console.log('End date is: ' + input.value);
      }
    );

    initFlowbite();
  }
}

bootstrapApplication(App);
