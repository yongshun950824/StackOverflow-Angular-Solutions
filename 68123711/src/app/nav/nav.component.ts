import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  githubURL = "";
  discordInvite = "";
  user: any = { username: "User A", displayAvatarURL: ""};

  constructor() { }

  ngOnInit() {
  }

}