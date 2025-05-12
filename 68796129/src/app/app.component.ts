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
  data: any[];

  constructor(
    private fb: FormBuilder,
    private _teamService: TeamService,
    private _notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams() {
    var noop = {};

    this.isInProgress = true;

    // Solution 1 works!
    this._teamService.getMembers().subscribe(data => {
      this.data = data.map(item => {
        return {
          ...item,
          id: item.memberId,
          fullName: item.firstName + ' ' + item.lastName
        };
      });

      console.log(this.data);
    });

    // Solution 2 works too!
    this._teamService.getMembers2().subscribe(data => {
      this.data = data;

      console.log(this.data);
    });
  }
}
