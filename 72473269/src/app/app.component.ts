import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError, forkJoin, of } from 'rxjs';
import { AlertService } from './alert.service';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RegistrationService, AlertService],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(
    private registrationService: RegistrationService,
    private alertService: AlertService
  ) {}

  registerUser(user: any) {
    let userinfo = { cusInfo: { ...user } };
    return this.registrationService.saveUserInfo(userinfo);
  }

  registerInfo({ code, name }) {
    let item = { reserve: { code, name } };
    //console.log(item);
    return this.registrationService.infoRequest(item);
  }

  registerCustomer(item, info, reservelockerform: NgForm) {
    this.alertService.clear();
    this.registrationService
      .checkDuplicateUser(info.userName)
      .subscribe((data) => {
        if (data.executionDescription == 'Success') {
          forkJoin([
            this.registerUser(info),
            this.registerInfo(item),
          ]).subscribe({
            next: (data: any) => {
              if (
                data &&
                data[0] &&
                data[0].status == 'success' &&
                data[1] &&
                data[1].status == 'success'
              )
                this.alertService.success(
                  'Registration has been made successfully'
                );
              else this.alertService.error('Registration is failed');
            },
            error: (err) => {
              console.log(err);
              this.alertService.error('Registration is failed');
            },
          });
        } else {
          this.alertService.error(data.executionDescription);
        }
      });
  }
}
