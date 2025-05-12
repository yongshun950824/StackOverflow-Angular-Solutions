import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeEventService } from '../employee-event.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  _id!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public employeeEventService: EmployeeEventService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this._id = params['id'];
    });
  }

  onSubmitProfile() {
    this.employeeEventService.setEvent('profile');
    this.router.navigate(['/employees-detail', this._id]);
  }

  onSubmitContact() {
    this.employeeEventService.setEvent('contact');
    this.router.navigate(['/employees-detail', this._id]);
  }
}
