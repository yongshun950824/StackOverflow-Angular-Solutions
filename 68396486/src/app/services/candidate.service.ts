import { HttpHeaders } from '@angular/common/http';
import {
  ICandidate,
  IAchievement,
  ICertificate,
  IEducation,
  IExperience,
  ISkill, IProfile
} from '../models/candidate.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TokenService } from './token.service';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { IResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  constructor(
    private http: HttpClient,
    private token: TokenService,
    private api: ApiService
  ) {}

  private candidateDetails!: ICandidate;

  getCandidateDetails(): ICandidate {
    return this.candidateDetails;
  }

  setCandidateDetails(candidateDetails: ICandidate): void {
    this.candidateDetails = candidateDetails;
  }

  // getCandidateProfile(): Observable<ICandidate> {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Authorization', this.token.get());
  //   const url: string = this.api.baseURL + 'display';
  //   return this.http.get<ICandidate>(url, { headers });
  // }

  getCandidateProfile(): Observable<IResponse<IProfile>> {
    return this.http.get<IResponse<IProfile>>('/assets/data.json');
  }
}
