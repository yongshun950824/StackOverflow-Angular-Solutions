import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: `main.html`,
  imports: [FormsModule, ReactiveFormsModule],
})
export class App {
  name = 'Angular';

  myForm!: FormGroup;
  data: any = {
    id: 5483,
    name: 'BLA BLA',
    events: [
      {
        eventId: 2554,
        title: 1,
        detail: 'details follows EN',
        dates: [
          { dateId: 2558, eventDate: '2015-11-20', startTime: '2015-11-20' },
        ],
      },
      {
        eventId: 2555,
        title: 2,
        detail: 'BLA BLA',
        dates: [
          { dateId: 2559, eventDate: '2015-11-21', startTime: '2015-11-21' },
          { dateId: 2560, eventDate: '2015-11-22', startTime: '2015-11-22' },
        ],
      },
    ],
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      id: new FormControl(0),
      name: new FormControl(''),
      events: this.fb.array([this.createEventFormGroup()]),
    });

    // Reset & Patch form value
    this.resetForm();
    this.patchForm();
  }

  resetForm() {
    this.events.clear();

    this.myForm.reset();
  }

  patchForm() {
    this.myForm.patchValue(this.data, { emitEvent: false });
    for (const event of this.data.events) {
      const eventFormGroup = this.createEventFormGroup();
      const datesFormArray = eventFormGroup.get('dates') as FormArray;

      // Reset 'dates' FormArray before patching
      datesFormArray.clear();
      eventFormGroup.patchValue(event, { emitEvent: false });

      for (const date of event.dates) {
        const dateFormGroup = this.createDateFormGroup();
        dateFormGroup.patchValue(date, { emitEvent: false });

        datesFormArray.push(dateFormGroup);
      }

      this.events.push(eventFormGroup);
    }

    console.log('form value', this.myForm.value);
  }

  createEventFormGroup(): FormGroup {
    return this.fb.group({
      eventId: new FormControl(0),
      title: new FormControl(0),
      detail: new FormControl(''),
      dates: this.fb.array([this.createDateFormGroup()]),
    });
  }

  createDateFormGroup(): FormGroup {
    return this.fb.group({
      dateId: [''],
      eventDate: [''],
      startTime: [''],
    });
  }

  get events(): FormArray {
    return this.myForm.get('events') as FormArray;
  }

  dates(eventIndex: number) {
    return this.events.at(eventIndex).get('dates') as FormArray;
  }

  addEvent(): void {
    this.events.push(this.createEventFormGroup());
  }

  removeEvent(index: number): void {
    this.events.removeAt(index);
  }

  addDate(eventIndex: number): void {
    this.dates(eventIndex).push(this.createDateFormGroup());
  }

  removeDate(eventIndex: number, dateIndex: number): void {
    this.dates(eventIndex).removeAt(dateIndex);
  }
}

bootstrapApplication(App);
