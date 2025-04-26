import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  _id!: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this._id = params['id'];
    });
  }

  onSubmitProfile() {
    this.router.navigate(['/employees-detail', this._id], {
      fragment: 'contact'
    });
  }

  onSubmitContact() {
    this.router.navigate(['/employees-detail', this._id], {
      fragment: 'contact'
    });
  }
}
