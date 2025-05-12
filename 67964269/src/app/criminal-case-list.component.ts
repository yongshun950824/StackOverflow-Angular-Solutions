import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CriminalCaseService } from './criminal-case.service';
import { IncidenceReportResponse } from './incidence-report-response.class';
import { Page } from './page.class';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'criminal-case-list',
  templateUrl: `./criminal-case-list.component.html`,
  styleUrls: ['./criminal-case-list.component.scss'],
  providers: [CriminalCaseService]
})
export class CriminalCaseListComponent implements OnInit {
  form: FormGroup;
  page = new Page();
  rows = Array<IncidenceReportResponse>();
  ColumnMode = ColumnMode;

  constructor(
    private formBuilder: FormBuilder,
    private criminalCaseService: CriminalCaseService
  ) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      incidence: ['']
    });
    this.setPage({ offset: this.page.pageNumber });
  }

  search() {
    console.log('search');
  }

  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.criminalCaseService.getResults(this.page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData[`results`];

      console.log(this.rows);
    });
  }
}
