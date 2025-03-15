import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { TourEvent } from './models/tour-event';
import { TourEventsService } from './services/tour.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TourEventsService],
})
export class AppComponent {
  events$: Observable<TourEvent[]>;
  constructor(private eventService: TourEventsService) {}
  ngOnInit() {
    this.events$ = this.eventService.getEvents();
  }
}
