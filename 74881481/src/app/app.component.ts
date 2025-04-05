import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  FeedBack!: FormGroup;

  ngOnInit(): void {
    this.buildGroupList();
  }

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.addDefaultRow();
  }

  addDefaultRow() {
    this.FeedBack = this.formBuilder.group({
      Rows: this.formBuilder.array([this.initRows()]),
      caseCount: new FormControl(null),
    });
  }

  initRows() {
    return this.formBuilder.group({
      property: [''],
      group: [''],
      variableName: [],
      minValue: [0],
      maxValue: [0],
    });
  }

  get formArr() {
    return this.FeedBack.get('Rows') as FormArray;
  }

  addRow(obj: any) {
    return this.formBuilder.group({
      property: [obj.property],
      group: [obj.group],
      variableName: [obj.variableName],
      minValue: [obj.minValue],
      maxValue: [obj.maxValue],
    });
  }

  addNewRow() {
    let obj1 = {
      property: '',
      group: '',
      variableName: '',
      minValue: 0,
      maxValue: 0,
    };
    this.formArr.push(this.addRow(obj1));
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  onSubmit() {
    console.log('Your form data : ', this.FeedBack.value);
  }

  private buildGroupList() {
    // this.http
    //   .get<APIResponse>('http://127.0.0.1:5000/mrg_groups')
    //   .subscribe((res) => {
    //     let groupList: { id: string; gname: string }[] = [
    //       { id: '', gname: 'Select Group' },
    //     ];
    //     res['data'].forEach((group) => {
    //       groupList.push({ id: group, gname: group });
    //     });
    //     this.groupList = groupList;
    //     console.log(this.groupList);
    //   });
  }

  groupList: { id: string; gname: string }[] = [
    { id: '', gname: 'Select Group' },
    { id: 'S01P', gname: 'S01P' },
    { id: 'S01', gname: 'S01' },
  ];

  propertyList: { id: string; pname: string }[] = [
    { id: '', pname: 'Select Property' },
    { id: 'AAA', pname: 'PROP A3' },
    { id: 'BBB', pname: 'PROP B3' },
    { id: 'CCC', pname: 'PROP C3' },
    { id: 'DDD', pname: 'PROP D3' },
    { id: 'EEE', pname: 'PROP E3' },
  ];

  selectedProperty: string = '';
  selectPropertyChangeHandler(event: any, rowIndex: number) {
    this.selectedProperty = event.target.value;
    console.log('this.selectedProperty: ', this.selectedProperty);
  }

  selectedGroup: string = '';
  selectGroupChangeHandler(event: any, rowIndex: number) {
    this.selectedGroup = event.target.value;
    console.log('this.selectedGroup: ', this.selectedGroup);
  }

  selectPropertyOrGroupChangeHandler(rowIndex: number) {
    let formGroup = this.formArr.controls[rowIndex] as FormGroup;
    let property = formGroup.controls['property'].value;
    let group = formGroup.controls['group'].value;

    if (property && group)
      formGroup.controls['variableName'].patchValue(`${property}_${group}`);
  }
}
