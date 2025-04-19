import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  USERS: any[] = [
    {
      id: 1,
      name: 'User 1',
      permission: 'Y',
    },
    {
      id: 2,
      name: 'User 2 (Hidden)',
      permission: 'N',
    },
    {
      id: 3,
      name: 'User 3',
      permission: 'Y',
    },
  ];
  users: any[] = this.USERS;

  ngOnInit() {
    // Filter users after getting data
    this.users = this.users.filter((user) => user.permission !== 'N');
  }
}
