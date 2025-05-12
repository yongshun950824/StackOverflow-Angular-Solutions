import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { IResponse } from './models/response.model';
import { TeamDto } from './models/teams/teams-dropdown-dto';
import { NotificationService } from './services/notification.service';
import { TeamService } from './services/team.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  model = new TeamDto();
  isInProgress: boolean = false;
  membersForm: FormGroup;
  teamId = 0;

  constructor(
    private fb: FormBuilder,
    private _teamService: TeamService,
    private _notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getTeamGeneralDetails();
  }

  getTeamGeneralDetails() {
    var noop = {};

    this.isInProgress = true;
    this._teamService
      .getTeamsGeneralDetails(this.teamId)
      .pipe(finalize(() => (this.isInProgress = false)))
      .subscribe({
        next: res => {
          if (res.isSuccess) {
            this.model = res.data[0];
            this.membersForm = this._createModelForm();
          }
        },
        error: err => this._notificationService.showError(err)
        //complete: noop
      });
  }

  private _createModelForm(): FormGroup {
    // Solution 1 works!!!
    const roles2 = this.model.teamMembersDto.reduce(
      (teamMembers, member) => [...teamMembers, ...member.roleDto],
      []
    );

    console.log("Solution 1 Roles:", roles2);

    // Solution 2 also works !!!
    const rolesByTeam = this.model.teamMembersDto.map(teamMember => {
      return teamMember.roleDto.reduce((roles, role) => roles.concat(role), []);
    });

    const roles = rolesByTeam.reduce((arr, role) => arr.concat(role), []);

    console.log("Roles by team: ", rolesByTeam);
    console.log("Solution 2 Roles: ", roles);

    return this.fb.group({
      id: [this.model.id || 0],
      teamMembersDto: [roles || []],
      teamTransactionDetailsDto: [this.model.teamTransactionDetailsDto || []]
    });
  }
}
