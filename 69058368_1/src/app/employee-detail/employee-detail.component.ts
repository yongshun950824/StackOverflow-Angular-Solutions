import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.fragment.subscribe(fragment => {
      if (fragment == 'profile') this.profileFunction();
      else if (fragment == 'contact') this.contactFunction();
    });
  }

  profileTemplate: boolean = false;
  contactTemplate: boolean = false;

  profileFunction() {
    this.profileTemplate = true;
    this.contactTemplate = false;
  }

  contactFunction() {
    this.profileTemplate = false;
    this.contactTemplate = true;
  }
}
