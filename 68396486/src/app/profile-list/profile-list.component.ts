import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { CandidateService } from 'src/app/features/driver/services/candidate.service';
//import { ICandidate } from 'src/app/features/driver/models/candidate.model';
//import { AppState } from 'src/app/store/reducers';
import { fromStore } from '../from.store';
import { ICandidate, ICandidateDetail, IProfile } from '../models/candidate.model';
import { IResponse } from '../models/response.model';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { CandidateService } from '../services/candidate.service';
import { Store } from '../services/store';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  public loggedIn!: boolean;

  candidate!: ICandidate;
  candidateDetail!: ICandidateDetail;

  constructor(
    private store: Store<fromStore.AppState>,
    //private router: Router,
    private auth: AuthService,
    private token: TokenService,
    private api : ApiService,
    private candidateService: CandidateService,
    ) {
    }

  ngOnInit(): void {

    this.candidateService.getCandidateProfile().subscribe(
      (response: IResponse<IProfile>) => {
        console.log(response);
        this.candidate = response.results.profile;
        this.candidateDetail = response.results.profile.detail;
        console.log(this.candidateDetail);
        this.candidateService.setCandidateDetails(this.candidate);
      });
  }
}