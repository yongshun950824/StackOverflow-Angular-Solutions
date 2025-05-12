import { Component, OnInit, VERSION } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tabs: any[];

  constructor(private cr: UserService) {}

  ngOnInit(): void {
    this.dataEtabUser();
  }

  dataEtabUser() {
    this.cr.getdataEtab().subscribe(data => {
      this.tabs = data;
    });
  }
}
