import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CompanyService } from '../features/company/services/company.service';
import { ICompany } from '../features/company/model/company.model';
import { AbstractControlOptions, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  public loggedIn!: boolean;
  isLoading = false;
  allList: any;
  editForm!: FormGroup;
  company!: ICompany;
  myregex: string = "\w+";

  constructor(
    //private router: Router,
    private auth: AuthService,
    //private token: TokenService,
    //private api : ApiService,
    private companyService: CompanyService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.loadEditForm();

    this.companyService.getMyCompany().subscribe(
      data => {
        this.allList = data.results.company;
        console.log(this.allList);
      }
    );
  }

  loadEditForm(){
    this.editForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(100)]],
      website: ['', [Validators.pattern(this.myregex), Validators.maxLength(100)]],
    });
  }

  fetchDataToEdit(id: any) {
    this.companyService.getCompanyById(id).subscribe(
      (data) => {
        console.log(data);

        let company = data.results.company;
        this.editForm.get('id')?.setValue(company.id);
        this.editForm.get('name')?.setValue(company.name);
        this.editForm.get('website')?.setValue(company.website);
      }
    );
  }

  submitEditForm() {
    
  }
}