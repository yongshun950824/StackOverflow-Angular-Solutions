import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  form: FormGroup;
  //empOfficialDetails: Employee;
  empOfficialDetails: any;
  //employeePersonalDetails : EmployeePersonalDetails;
  employeePersonalDetails: any;
  editMode: boolean = false;
  employeeCreatedOrUpdated: boolean = false;
  formTitle: string;
  successMessage: string;
  employeeId: string;
  selectedFile: File = null;
  url: any;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService // private route: ActivatedRoute
  ) {
    // var id = this.route.snapshot.paramMap.get('id');
    let id = '1'; // Hardcode
    this.employeeId = id;

    this.initForm();

    this.employeeService
      .getEmployeePersonalDetails(this.employeeId)
      .subscribe((data) => {
        this.employeePersonalDetails = data;
        if ((this.employeePersonalDetails = null)) {
          alert('create');
          this.editMode = false;
          this.createForm();
          this.formTitle = 'Add Employee Personal Details';
          this.successMessage = 'Employee Personal Details Added';
          this.employeeCreatedOrUpdated = true;
        } else {
          alert('edit');
          alert('hi');
          alert(this.employeePersonalDetails.id);
          alert(this.employeePersonalDetails.nationality);
          alert('hello');
          this.editMode = true;
          this.getFormContent();
          this.formTitle = 'Update Employee Personal Details';
          this.successMessage = 'Employee Personal Details Updated';
          this.employeeCreatedOrUpdated = true;
          //edit
        }
      });
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      fullName: [''],
      photo: [''],

      // dateOfBirth: [''],
      // nationality: [''],
    });
  }

  createForm() {
    this.form = this.fb.group({
      id: this.employeeId, // why does this say unknown property
      fullName:
        this.empOfficialDetails.firstName +
        ' ' +
        this.empOfficialDetails.middleName +
        ' ' +
        this.empOfficialDetails.lastName,
      photo: [''],

      // dateOfBirth: [''],
      // nationality: [''],
    });
  }

  getFormContent() {
    this.form.setValue({
      fullName: this.employeePersonalDetails.fullName || '',
      photo: this.employeePersonalDetails.photo || '',
      // bankName: this.employeePersonalDetails.bankName || '',
      // branch: this.employeePersonalDetails.branch || '',
    });
  }
}
