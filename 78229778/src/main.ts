import { Component, ViewChild, OnInit } from '@angular/core';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
//mport { userInfo } from './Models/UserInfo';
//import { CSCService } from './Services/csc.service';
import {
  NgForm,
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [FormsModule, NgIf, JsonPipe],
})
export class App {
  title = 'AllinOne';
  editRecordId = null;
  formData: any[] = [];
  @ViewChild('f') Forms!: NgForm;
  genders = ['male', 'female'];
  //public user: any = [];
  user = {
    id: '',
    username: '',
    email: '',
    phoneNumber: '',

    states: [],
    cities: [],
    gender: '',
    pas1: '',
    pas2: '',
  };

  form = ['one', 'two', 'three'];
  selected = 'two';
  submitted = false;

  public check: boolean = true;

  // Password confirmation function
  checkPass(pas1: any, pas2: any) {
    console.log(pas1.value);
    console.log(pas2.value);
    if (pas1.value == pas2.value) {
      this.check = false;
      console.log('Matched');

      this.Forms.controls['pas2'].setErrors({ noMatch: null });
    } else {
      this.check = true;
      console.warn('Not matched');

      this.Forms.controls['pas2'].setErrors({ noMatch: true });
    }
  }

  constructor(
    private formBuilder: FormBuilder //private cscService: CSCService
  ) {
    //this.user = new userInfo('', '', '', '', '', '', '', '', '', '');
  }

  ngOnInit() {
    //this.country = this.cscService.country();
    console.log(this.country);
    //this.state = this.cscService.state();
    console.log(this.state);
    //this.city = this.cscService.city();
    console.log(this.city);
  }
  country: any = [];
  state: any = [];
  city: any = [];
  onSelectCountry(country: any) {
    console.log(country.target.value);
    // this.state = this.cscService
    //   .state()
    //   .filter((e) => e.did == country.target.value);
    console.log(this.state);
  }
  onSelectState(state: any) {
    console.log(state.target.value);
    // this.city = this.cscService
    //   .city()
    //   .filter((f) => f.sid == state.target.value);
    console.log(this.city);
  }

  onEdit(user: any) {
    // destructure user object separate ID and rest of the fields
    // coz we didn't have ID field so to avoid error dont use ID
    const { id, ...data } = user;

    // set edit record ID
    this.editRecordId = id;

    // set form value with selected user
    this.Forms.setValue(data);
  }

  onDelete(user: any) {
    // filter out deleted entry from form data array matching
    // with the ID of deleted user record with ID from form data array
    this.formData = this.formData.filter((data: any) => data.id !== user.id);
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.editRecordId) {
      // check if already exist record in formData matches with the
      // edit reocrd id that means its edited record then return newly
      // submitted form value else return old formData record
      // and populate formData array.
      this.formData = this.formData.map((data: any) =>
        data.id === this.editRecordId ? this.Forms.value : data
      );

      // rest edit record id to null again
      this.editRecordId = null;
    } else {
      // assigning unique ID to each record I used timestamp technically it would be database primary key ID
      const id = Date.now();

      const data = {
        id,
        ...this.Forms.value,
      };
      this.formData.push(data);
    }

    this.Forms.reset();
  }
}

bootstrapApplication(App);
