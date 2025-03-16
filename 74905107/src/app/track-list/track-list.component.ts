import { Component, OnInit } from '@angular/core';
import { Track } from '../track';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css'],
  providers: [TrackService],
})
export class TrackListComponent implements OnInit {
  constructor(private trackService: TrackService) {}

  _track: Track;
  //_tracks2: Track[] = [];

  ngOnInit(): void {
    this.trackService.retrieveAll().subscribe((track) => {
      this._track = track;

      console.log(this._track.tracks.track[0].name); // Output: Property 'name' does not exist on type 'Track[]'
    });
  }
}
