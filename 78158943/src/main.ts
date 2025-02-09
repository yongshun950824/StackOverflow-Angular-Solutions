import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { CheckBoxAccordionDirective } from './CheckBoxAccordionDirective ';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [CheckBoxAccordionDirective, NgForOf, NgIf],
})
export class App {
  name = 'Angular';

  departmentDemandList = [
    {
      DepartmentName: 'A',
      Demands: [
        {
          Id: 1,
          Name: 'A1',
          Parameters: [
            {
              Id: 1,
              Name: 'AA1',
            },
          ],
        },
      ],
    },
  ];
}

bootstrapApplication(App);
