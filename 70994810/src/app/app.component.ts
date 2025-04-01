import { Component, VERSION } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  selectedInstitutions: any[];

  institutions = [
    [{ displayValue: 'ABC', id: 781 }],
    [{ displayValue: 'DEF', id: 782 }],
  ];

  abbreviation = { institutionIds: 1 };

  transcriptSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'displayValue',
    selectAllText: 'Select All',
    unSelectAllText: 'Unselect All',
    itemsShowLimit: 3,
    allowSearchFilter: true,
  };

  ngOnInit() {
    this.selectedInstitutions = ([] as any[]).concat(
      ...this.institutions
    );

    const temp = this.selectedInstitutions.map(
      (x: any) =>
        <any>{
          title: x.displayValue,
        }
    );

    console.log(temp);
  }
}
