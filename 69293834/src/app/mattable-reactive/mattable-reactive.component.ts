import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

export class ListColumns {
  label?: string;
  property?: string;
  visible?: boolean;
  isProperty?: boolean;
  type?: string;
  inlineEdit?: boolean;
}

const DATA_SCHEMA = {
  id: 'number',
  coa: 'text',
  description: 'text',
  dc: 'text',
  currency: 'currency',
  amount: 'number',
  local_amount: 'number',
  cross_coa: 'text',
  Edit: 'edit',
  Select: 'select',
};

const DATA_DETAIL = [
  {
    id: 1,
    coa: '1111',
    description: 'Uraian',
    dc: 'D',
    currency: 'IDR',
    amount: 12345,
    local_amount: 12345,
    cross_coa: '2222',
  },
  {
    id: 2,
    coa: '2222',
    description: 'Uraian',
    dc: 'D',
    currency: 'IDR',
    amount: 12345,
    local_amount: 12345,
    cross_coa: '1111',
  },
  {
    id: 3,
    coa: '3333',
    description: 'Uraian',
    dc: 'D',
    currency: 'IDR',
    amount: 12345,
    local_amount: 12345,
    cross_coa: '4444',
  },
];

@Component({
  selector: 'app-mattable-reactive',
  templateUrl: './mattable-reactive.component.html',
  styleUrls: ['./mattable-reactive.component.css'],
})
export class MattableReactiveComponent implements OnInit {
  // -- detail Part
  dataSchema = DATA_SCHEMA;
  DetailDS = DATA_DETAIL;
  // DetailDS: any;
  columns: ListColumns[] = [
    { label: 'Select', property: 'select', visible: true, isProperty: true },
    { label: 'GL Accounts', property: 'coa', visible: true, isProperty: true },
    {
      label: 'Description',
      property: 'description',
      visible: true,
      isProperty: true,
    },
    { label: 'D/C', property: 'dc', visible: true, isProperty: true },
    {
      label: 'Currency',
      property: 'currency',
      visible: true,
      isProperty: true,
    },
    { label: 'Amount', property: 'amount', visible: true, isProperty: true },
    {
      label: 'Local Amount',
      property: 'local_amount',
      visible: true,
      isProperty: true,
    },
    {
      label: 'Cross GL Account',
      property: 'cross_coa',
      visible: true,
      isProperty: true,
    },
    { label: 'Edit', property: 'edit', visible: true, isProperty: true },
  ];
  selection = [];
  myFormDetail: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createFormDetail();
    this.getDetailRowData();
  }

  // -- Detail Part
  createFormDetail() {
    this.myFormDetail = this.fb.group({
      tableRowArray: this.fb.array([]),
    });
  }

  createTableRow(detailDS): FormGroup {
    return this.fb.group({
      id: new FormControl(detailDS.id),
      coa: new FormControl(detailDS.coa),
      description: new FormControl(detailDS.description),
      dc: new FormControl(detailDS.dc),
      currency: new FormControl(detailDS.currency),
      amount: new FormControl(detailDS.amount),
      local_amount: new FormControl(detailDS.local_amount),
      cross_coa: new FormControl(detailDS.cross_coa),
      edit: new FormControl(detailDS.edit),
      select: new FormControl(detailDS.select),
    });
  }

  getDetailRowData() {
    // const formArray = this.myFormDetail.get('tableRowArray') as FormArray;
    this.DetailDS.map((item) => {
      console.log('ITEM: ' + JSON.stringify(item));
      this.tableRowArray.push(this.createTableRow(item));
    });
    this.myFormDetail.setControl('tableRowArray', this.tableRowArray);

    console.log('221: DetailDS: ' + JSON.stringify(this.DetailDS));
  }

  get tableRowArray(): FormArray {
    return this.myFormDetail.get('tableRowArray') as FormArray;
  }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  addRow() {
    const newRow = {
      id: Math.floor(Date.now()),
      coa: '',
      description: '',
      dc: '',
      currency: '',
      amount: 0,
      local_amount: 0,
      cross_coa: '',
      isEdit: true,
      isNew: true,
    };
    this.DetailDS = [...this.DetailDS, newRow];
    this.tableRowArray.push(this.createTableRow(newRow));
    console.log('273: DetailDS: ' + JSON.stringify(this.DetailDS));
  }

  removeRow(id, row?) {
    console.log('255: Idx: ' + id);
    console.log('256: Row: ' + JSON.stringify(row));
    console.log('265: DetailDS: ' + JSON.stringify(this.DetailDS));

    var remove = row === undefined || row.isNew ? true : row.isEdit;
    if (remove) {
      this.DetailDS = this.DetailDS.filter((u) => u.id !== id);
    }
    console.log('265: DetailDS: ' + JSON.stringify(this.DetailDS));
  }

  removeSelectedRow() {
    this.DetailDS = this.DetailDS.filter((u: any) => !u.selected);
    this.selection = this.selection.filter((u: any) => !u.selected);
  }

  isAllSelected(event: MatCheckboxChange) {
    if (event.checked) {
      this.DetailDS.forEach((row) => {
        row['selected'] = event.checked;
        this.selection.push(row);
      });
    } else {
      this.selection.length = 0;
    }
  }

  // -- checkbox feature

  isIndeterminate() {
    return this.selection.length > 0 && !this.isChecked();
  }

  isChecked() {
    return this.selection.length === this.DetailDS.length;
  }

  exists(item) {
    return this.selection.indexOf(item) > -1;
  }

  toggle(item, event: MatCheckboxChange) {
    if (event.checked) {
      this.selection.push(item);
    } else {
      const idx = this.selection.indexOf(item);
      if (idx >= 0) {
        this.selection.splice(idx, 1);
      }
    }
    item.selected = event.checked;
  }
}
