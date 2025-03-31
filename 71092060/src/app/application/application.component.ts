import { Component, OnInit } from '@angular/core';
import { Application } from './application';
import { ApplicationService } from './application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  providers: [ApplicationService],
})
export class ApplicationComponent implements OnInit {
  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {
    this.applicationService.getPostponements().subscribe((applications) => {
      // Get first Application item for userIn's username
      console.log(applications.body[0].userIn.username);

      //Get specific userIn's username by id
      console.log(applications.body.find((x) => x.id == 1).userIn.username);

      // Get all userIn's username
      let userInUsernames = applications.body.map(
        (x: Application) => x.userIn.username
      );

      console.log(userInUsernames);
    });
  }
}
