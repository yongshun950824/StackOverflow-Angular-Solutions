import { JsonPipe } from '@angular/common';
import { Component, Signal, computed } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

export interface CalendarModel {
  date: Date;
  events: CalendarEvent[];
}
export interface CalendarEvent {
  imageUrl?: string;
  title: string;
  date?: Date;
  location?: string;
  time?: string;
  description: string;
  type?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    {{ getAllEvents() | json }}
  `,
  imports: [JsonPipe],
})
export class App {
  name = 'Angular';

  allCalendarInformation!: CalendarModel[];

  getAllEvents: Signal<CalendarEvent[]> = computed(() =>
    //this.dataService.allInformation()?
    ({
      allCalendarInformation: [
        {
          date: new Date('2024-01-01'),
          events: [
            {
              date: new Date('2024-01-01'),
              type: 'not-event',
            },
          ],
        } as CalendarModel,
        {
          date: new Date('2024-12-25'),
          events: [
            {
              date: new Date('2024-12-25'),
              type: 'event',
            },
          ],
        } as CalendarModel,
      ] as CalendarModel[], // Mockup to remove
    }?.allCalendarInformation
      ?.reduce(
        (acc: CalendarEvent[], cur: CalendarModel) => [...acc, ...cur.events],
        [] as CalendarEvent[]
      )
      .filter(
        (event: CalendarEvent) =>
          event.type === 'event' &&
          event.date &&
          new Date(event.date).getTime() >= new Date().setHours(0, 0, 0, 0)
      ))
  );
}

bootstrapApplication(App);
