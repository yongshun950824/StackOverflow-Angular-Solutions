import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../models/response.model';
import { TeamDto } from '../models/teams/teams-dropdown-dto';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private http: HttpClient) {}

  getTeamsGeneralDetails(teamId: number): Observable<IResponse<TeamDto[]>> {
    return this.http.get<IResponse<TeamDto[]>>('/assets/data.json');
  }
}
