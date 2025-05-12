import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeResponse, IEmployee } from './models/model';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profileInfoForm!: FormGroup;
  licenceInfoForm!: FormGroup;

  profileTemplate: boolean = true;
  licenceTemplate: boolean = false;

  isLoading = false;
  employee: IEmployee;
  _id = 1;

  constructor(
    private fb: FormBuilder,
    //private router: Router,
    //private route: ActivatedRoute,
    //private store: Store<AppState>
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    //this._id = this.route.snapshot.params['id'];
    this.updateEmployee();
    this.updateLicence();
    this.loadEmployeeById();
  }

  profileFunction() {
    this.profileTemplate = true;
    this.licenceTemplate = false;
  }

  licenceFunction() {
    this.profileTemplate = false;
    this.licenceTemplate = true;
  }

  updateEmployee() {
    this.profileInfoForm = this.fb.group({
      id: [''],
      first_name: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
      ],
      other_name: ['', [Validators.maxLength(50)]],
      last_name: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
      ]
    });
  }

  updateLicence() {
    this.licenceInfoForm = this.fb.group({
      id: [''],
      licence_number: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  get fp() {
    return this.profileInfoForm.controls;
  }
  get fl() {
    return this.licenceInfoForm.controls;
  }

  profileValidate() {
    if (!this.profileInfoForm.valid) {
      this.profileInfoForm.markAllAsTouched();
      return;
    }
  }

  licenceValidate() {
    if (!this.licenceInfoForm.valid) {
      this.licenceInfoForm.markAllAsTouched();
      return;
    }
  }

  loadEmployeeById() {
    this.employeeService
      .getEmployeeById(this._id)
      .subscribe((data: EmployeeResponse) => {
        console.log(data.results.employee)
        this.employee = data.results.employee;
        this.profileInfoForm.patchValue({
          first_name: this.employee.first_name,
          other_name: this.employee.other_name,
          last_name: this.employee.last_name
        });
        this.licenceInfoForm.patchValue({
          licence_number: this.employee.licence_number
        });
      });
  }

  onSubmitProfile() {}

  onSubmitLicence() {}
}
