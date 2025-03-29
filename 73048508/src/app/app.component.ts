import { Component, Inject } from '@angular/core';
import {
  VERSION,
  MatDialogRef,
  MatDialog,
  MatSnackBar,
  MAT_DIALOG_DATA,
  MatTableDataSource,
  MatSelectChange,
} from '@angular/material';
import { ConfirmationDialog } from './confirmation-dialog.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata';
import { FormArray } from '@angular/forms';

export interface Element {
  name: string;
  item: string;
}

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  version = VERSION;
  value = '';
  fg: FormGroup;
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  items = ELEMENT_DATA;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.fg = this.fb.group({
      name: [],
      item: [],
    });
  }

  ngOnInit() {}

  selectedType(trigger: MatSelectChange) {
    this.dataSource = trigger.value;

    const selectedItem = this.items.find((x) => x.name == trigger.value);
    if (selectedItem) this.fg.controls.item.patchValue(selectedItem.item);
  }
}
const ELEMENT_DATA: Element[] = [{ name: 'Arnold', item: 'Laptop' }];
