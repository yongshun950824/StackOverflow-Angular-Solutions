import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [FormsModule, ReactiveFormsModule, NgFor],
})
export class App {
  name = 'Angular';

  myForm = new FormGroup({
    tier1_eligibility: new FormControl<boolean>(false),
    tier2_eligibility: new FormControl<boolean>(false),
    tier3_eligibility: new FormControl<boolean>(false)
  })
  
}

bootstrapApplication(App);
