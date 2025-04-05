import { Component, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-mrgform',
  templateUrl: './mrgform.component.html',
  styleUrls: ['./mrgform.component.css']
})
export class MrgformComponent {

  propertyList: { id: string, pname: string }[] = [
    { id: '', pname: 'Select Property' },
    { id: 'PROP1', pname: 'Prop 1' },
    { id: 'PROP2', pname: 'Prop 2' },
  ];

  groupList: { id: string, gname: string }[] = [
    { id: '', gname: 'Select Group' },
    { id: 'GRP1', gname: 'Group 1' },
    { id: 'GRP2', gname: 'Group 2' }
  ];

  selectedProperty: string = '';
  selectPropertyChangeHandler(event: any) {
    this.selectedProperty = event.target.value;
    console.log('selectedProperty:', this.selectedProperty)
  }

  selectedGroup: string = '';
  selectGroupChangeHandler(event: any) {
    this.selectedGroup = event.target.value;
    console.log('selectedGroup:', this.selectedGroup)
  }

  @Input()
  MRGChildForm: FormGroup = new FormGroup({
    property: new FormControl(''),
    group: new FormControl(''),
    variableName: new FormControl(''),
    minValue: new FormControl(0),
    maxValue: new FormControl(0)
  });

  static addMGRRowItem(): FormGroup {
    return new FormGroup({
      property: new FormControl(''),
      group: new FormControl(''),
      variableName: new FormControl(''),
      minValue: new FormControl(0),
      maxValue: new FormControl(0)
    });
  }

}
