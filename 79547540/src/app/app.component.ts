// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { pairwise, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  reportListFG: FormGroup;
  showFilters = false;
  identifierFilterValue: string[] = [];
  searchPerformed = false; // Add this property

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeSearchPage();
  }

  searchReport(event: PageEvent) {
    this.showFilters = true;
    this.searchPerformed = true; // Set to true when search is clicked
  }

  initializeSearchPage() {
    this.reportListFG = this.fb.group({
      //timePeriod will be used on the main page not filter
      timePeriod: [[]],
      filterGroup: this.fb.group({
        ALL: [true],
        Checkbox1: [false],
        Checkbox2: [false],
        Checkbox3: [false],
      }),
    });

    // Listen to form changes and handle the logic for "All" and other checkboxes
    this.reportListFG
      .get('filterGroup')
      .valueChanges.pipe(
        startWith(this.reportListFG.get('filterGroup').value),
        pairwise()
      )
      .subscribe(([previousValues, values]) => {
        this.handleCheckboxSelection(previousValues, values);
      });
  }

  onIdentifierFilterChanged(identifierFilterValue: string[]): void {
    this.identifierFilterValue = identifierFilterValue;
  }

  handleCheckboxSelection(previousValues: any, values: any) {
    const allSelected = values.ALL;
    const checkBox1Selected = values.Checkbox1;
    const checkBox2Selected = values.Checkbox2;
    const checkBox3Selected = values.Checkbox3;
    const isAllSelectedChanged = previousValues?.ALL != values.ALL;
    const checkBox1SelectedChanged =
      previousValues.Checkbox1 != values.Checkbox1;
    const checkBox2SelectedChanged =
      previousValues.Checkbox2 != values.Checkbox2;
    const checkBox3SelectedChanged =
      previousValues.Checkbox3 != values.Checkbox3;

    if (isAllSelectedChanged && allSelected) {
      // If "All" is selected, deselect others
      this.reportListFG.get('filterGroup')?.patchValue(
        {
          Checkbox1: false,
          Checkbox2: false,
          Checkbox3: false,
        },
        { emitEvent: false } // Prevent infinite loop
      );
    } else if (
      checkBox1SelectedChanged ||
      checkBox2SelectedChanged ||
      checkBox3SelectedChanged
    ) {
      // If "All" is not selected, deselect "All" if any other is selected

      this.reportListFG.get('filterGroup')?.patchValue(
        {
          ALL: false,
          Checkbox1: checkBox1Selected,
          Checkbox2: checkBox2Selected,
          Checkbox3: checkBox3Selected,
        },
        { emitEvent: false }
      );

      // Alternate without update whole filterGroup object
      // this.reportListFG.get('filterGroup')
      //   .get("ALL")
      //   .setValue(false, { emitEvent: false });
    }
  }
}
