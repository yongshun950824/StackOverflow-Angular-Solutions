import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
// import { ResponseApi } from '../../models/api';
// import { EventService } from '../../services/event.service';
// import { Event } from '../../models/event';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { ResponseApi } from '../models/api';
import { Event } from '../models/event';

@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.scss']
})
export class AdminEventsComponent implements OnInit {
  eventList$: Observable<Event[]>;
  eventList: MatTableDataSource<Event>;

  an_event: any;

  displayedColumns: string[] = [
    'description'
    // 'start_time',
    // 'end_time',
    // 'cell',8
    // 'task_type'
  ];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.getEvents();
    //this.getEventDetail(this.an_event);
  }

  getEvents(): void {
    this.eventService.list().subscribe((responseApi: ResponseApi<Event>) => {
      this.eventList = new MatTableDataSource(responseApi.results);
    });
  }

  getEventDetail(an_event: Event) {
    let route = '/admin-events/details/';
    this.router.navigate([route, an_event.id]);
  }
}
