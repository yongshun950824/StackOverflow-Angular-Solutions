import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  searchForm: FormGroup;

  ngOnInit() {
    this.searchForm = this.formBuilder.group({});
    this.searchForm.addControl('selectedCities', new FormControl([]));
  }
}
