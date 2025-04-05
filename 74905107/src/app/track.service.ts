import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from './track';

@Injectable()
export class TrackService {
  constructor(private httpClient: HttpClient) {}

  private TracksUrlPre: string =
    'https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=';
  private TracksUrlPos: string =
    '&api_key=78769e93e4d6f4576ee0a1cc572f84dc&format=json';

  retrieveAll(): Observable<Track> {
    return this.httpClient.get<Track>(
      `${this.TracksUrlPre}brazil${this.TracksUrlPos}`,
      { responseType: 'json' }
    );
  }
}
