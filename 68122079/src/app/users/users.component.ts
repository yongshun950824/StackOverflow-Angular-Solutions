import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service'
import { NgBlockUI, BlockUI } from 'ng-block-ui'
import { AlertService } from '../_services/alert.service'
import { ReactiveFormsModule, FormBuilder, FormControl, FormControlDirective, FormControlName, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @BlockUI('changelog') blockUIChangelog: NgBlockUI;

  users = [];
  public breadcrumb: any;
  options = {
    close: false,
    expand: true,
    minimize: true,
    reload: true
  };

  pageSize = 5;

  page = 1;

  public searchCtrl: FormControl = new FormControl();
  private _onDestroy = new Subject<void>();
  public filteredUsers:  ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  constructor(
    private dataService: DataService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.breadcrumb = {
      'mainlabel': 'Users Administration',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },
        {
          'name': 'Admin Users',
          'isLink': false,
          'link': '#'
        },
      ]
    };
    console.log('OnInit users component');
    this.getUsers();
    this.searchCtrl.valueChanges.pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
              this.search();
            });

  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  search(){
    console.log("Search invoked");
    let search = this.searchCtrl.value;
    console.log("Search term is:",search);
    if (!search) {
      console.log("Search is empty");
      console.log("Filtered media is:",this.filteredUsers);
      this.filteredUsers.next(this.users.slice());
      return;
    } else {
      console.log("Filtered media is:",this.filteredUsers);
      console.log("Search is:",search);
      search = search.toLowerCase();
    }

    this.filteredUsers.next(
      this.users.filter(user => (
        user.name.toLowerCase().indexOf(search) > -1 ||
        user.lastname.toLowerCase().indexOf(search) > -1
        )
      )
    );
  }

  getUsers() {
    this.dataService.getUsers().subscribe({
      next: (users) => {
        console.log('Received users:', users);
        this.users = users;
        this.filteredUsers.next(this.users);
      },
      error: (error) => {
        console.log('Received error downloading users:', error);
      }
    })

  }

  editUser(user) {
    console.log("Received user to edit:", user);
  }

  deleteUser(user) {
    if (window.confirm('Sei sicuro di voler cancellare l\'utente?')) {
      console.log("Received user to delete:", user);
      var id = user.id;
      this.blockUIChangelog.start('Loading..');
      this.dataService.deleteUser(id)
        .subscribe({
          next: (response) => {
            this.deleteRow(id);
            this.alertService.success("User successfully deleted");
            this.blockUIChangelog.stop();

          },
          error: (error) => {
            this.alertService.error("An error occured");
            this.blockUIChangelog.stop();
          }
        });

    }
  }

  reloadChangelog() {
    this.blockUIChangelog.start('Loading..');
    this.getUsers();

    setTimeout(() => {
      this.blockUIChangelog.stop();
    }, 2500);
  }

  deleteRow(id) {
    for (let i = 0; i < this.users.length; ++i) {
      if (this.users[i].id === id) {
        this.users.splice(i, 1);
      }
    }
  }

  onUserCreated(user: any) {
    console.log('OnUserCreated emitted:', user);
  }

}