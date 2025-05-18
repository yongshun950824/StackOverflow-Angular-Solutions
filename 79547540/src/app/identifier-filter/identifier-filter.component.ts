import { FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-identifier-filter',
  templateUrl:'./identifier-filter.component.html'
})

export class IdentifierFilter {
  
  @Output() clear = new EventEmitter<void>();
  @Input() formGroup: FormGroup;
  @Output() identifierFilterChanged = new EventEmitter<string[]>();  // Emit an array of selected values

  constructor() {}


  selectedFormTypes: string[] = [];

  onIdentifierSelectionChange(event: MatCheckboxChange, formType: string) {
    if (event.checked) {
      this.selectedFormTypes.push(formType);
    } else {
      this.selectedFormTypes = this.selectedFormTypes.filter(type => type !== formType);
    }
 
    console.log('Selected Filters to Parent:', this.selectedFormTypes);
    this.identifierFilterChanged.emit([...this.selectedFormTypes]);
  }

}

