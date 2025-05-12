import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-admin-event-details',
  templateUrl: './admin-event-details.component.html',
  styleUrls: ['./admin-event-details.component.css']
})
export class AdminEventDetailsComponent implements OnInit {
  id: number;
  event: Event;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getEventDetail(this.id);
    });
  }

  getEventDetail(id) {
    this.eventService.detail(id).subscribe((data: Event) => {
      this.event = data;
    });
  }
}
