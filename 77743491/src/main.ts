import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { NgSelectModule } from '@ng-select/ng-select';
import 'zone.js';

export interface User {}

export interface Country {
  id: Number;
  frenchName: string;
  logo: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [CommonModule, FormsModule, NgSelectModule],
})
export class App {
  user!: User;
  countries: Country[] = [];
  AuthUserSub!: Subscription;

  constructor() {}
  // private authService: AuthService,
  // private countryService: CountryService
  ngOnInit(): void {
    // this.AuthUserSub = this.authService.AuthenticatedUser$.subscribe({
    //   next: user => {
    //     if (user) this.user = user;
    //   }
    // })
    // this.countryService.getAllCountries().subscribe({
    //   next: data => {
    //     this.countries = data;
    //     this.countries.forEach(element => {
    //       element.logo = "/assets/flags/" + element.logo;
    //     });
    //   },
    //   error: err => console.log(err)
    // })

    this.countries = [
      {
        id: 1,
        frenchName: 'French',
        logo: '',
      },
      {
        id: 2,
        frenchName: 'Great Britain',
        logo: '',
      },
      {
        id: 3,
        frenchName: 'Italy',
        logo: '',
      },
    ];
  }

  onSubmitNewTeam(formNewTeam: NgForm) {
    console.log(formNewTeam.value);
    if (!formNewTeam.valid) {
      return;
    }
  }

  ngOnDestroy() {
    this.AuthUserSub.unsubscribe();
  }
}

bootstrapApplication(App);
