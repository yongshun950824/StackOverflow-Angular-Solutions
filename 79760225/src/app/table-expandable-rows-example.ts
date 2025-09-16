import { SelectionModel } from '@angular/cdk/collections';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogContentExampleComponent } from './dialog-content-example.component';
import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  CdkDragStart,
  CdkDropList,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { FormControl } from '@angular/forms';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'table-expandable-rows-example',
  styleUrls: ['table-expandable-rows-example.scss'],
  templateUrl: 'table-expandable-rows-example.html',
  //imports: [MatCheckboxModule],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableExpandableRowsExample implements AfterViewInit, OnDestroy {
  columnsToDisplay: string[] = [
    //'action',
    'Name',
    'weight',
    'symbol',
    'position',
    'Delivery Day',
  ];

  constructor(private dialog: MatDialog) {}
  dataFromDialog: any;

  showPrompt(): void {
    const dialogRef = this.dialog.open(DialogContentExampleComponent, {
      width: '350px',
      height: '400px',
    });

    dialogRef.afterClosed().subscribe((data) => {
      this.dataFromDialog = data.form;
      if (data.clicked === 'submit') {
        console.log('Sumbit button clicked');
      }
    });
  }

  // constructor(public dialog: MatDialog) {}

  // openDialog() {
  //   /**
  //    * Fullscreen dialog with 15px margins
  //    *
  //    * -> to make it work, wee need extra styling on dialog component below...
  //    */
  //   const dialogRef = this.dialog.open(DialogContentExample, {
  //     height: 'calc(80% - 100px)',
  //     width: 'calc(80% - 100px)',
  //     maxWidth: '50%',
  //     maxHeight: '50%',
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  sub: Subscription;

  columns: any[] = ['Name', 'weight', 'symbol', 'position', 'Delivery Day'];
  // columnsToReorder: string[] = ['Name', 'weight', 'symbol', 'position'];
  columnsToDisplayWithExpand = ['select', 'action', ...this.columnsToDisplay];

  dataSource = new MatTableDataSource<PeriodicElement>(
    ELEMENT_DATA.map((x) => ({ ...x, children: [x] }))
  );
  expandedElement: PeriodicElement | null;
  selection = new SelectionModel<PeriodicElement>(true, []);

  expandedElements: PeriodicElement[] | null = [];

  days = new FormControl(['Monday']);

  dayList: any[] = [
    { value: 'Mo', text: 'Monday' },
    { value: 'Tu', text: 'Tuesday' },
    { value: 'We', text: 'Wednesday' },
    { value: 'Th', text: 'Thursday' },
    { value: 'Fr', text: 'Friday' },
    { value: 'Sa', text: 'Saturday' },
    { value: 'Su', text: 'Sunday' },
  ];
  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(
  //     this.columnsToReorder,
  //     event.previousIndex,
  //     event.currentIndex
  //   );
  // }

  filter(data: any, filter: string) {
    const days = filter.split(','); //e.g. days=['Su','Tu']
    console.log(data.DeliveryDay);
    return days.reduce(
      (a: boolean, b: string) => a || data.DeliveryDay.includes(b),
      false
    );
  }

  daysSelected: string = 'all';
  previousIndex: number;

  @ViewChild(MatSort) sort: MatSort;

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = this.filter;
    this.sub = this.days.valueChanges.subscribe((res: any[]) => {
      this.dataSource.filter = res.map((x: any) => x.value).join(',');
      this.daysSelected = res.map((x: any) => x.text).join(',') || 'all';
    });
  }

  setDisplayedColumns() {
    this.displayedColumns = [
      'select',
      'action',
      ...this.columns,
      this.toggleColDef,
    ];
  }

  dragStarted(event: CdkDragStart, index: number) {
    const prevIndex = this.columns.indexOf(event.source.data.name);
    this.previousIndex = prevIndex;
  }

  dropListDropped(event: CdkDragDrop<any>, targetColumn: string) {
    if (event) {
      const dropIndex = this.columns.indexOf(targetColumn);

      console.log(
        `${event.item.data.name} Move from ${this.previousIndex} to ${dropIndex}`
      );

      moveItemInArray(this.columns, this.previousIndex, dropIndex);

      this.setDisplayedColumns();
    }
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
  columnDefinitions = [
    { def: 'Name', label: 'Name', visible: true },
    {
      def: 'weight',
      label: 'Weight',
      visible: true,
    },
    {
      def: 'symbol',
      label: 'Symbol',
      visible: true,
    },
    {
      def: 'position',
      label: 'Position',
      visible: true,
    },
  ];

  toggleColDef = 'toggleCol';

  displayedColumns: any = [
    ...this.columnsToDisplayWithExpand,
    this.toggleColDef,
  ];

  // all columns for tracking order
  allCols = [...this.displayedColumns];

  // use Set to track checked columns
  checkedColumns = new Set(this.displayedColumns);

  toggleColumn(col: string, checked: boolean) {
    if (checked) {
      // add to checked columns if checked
      this.checkedColumns.add(col);
    } else {
      // remove
      this.checkedColumns.delete(col);
    }

    // recreate columns in the same order, add toggle manually
    this.displayedColumns = this.allCols.filter((el) => {
      if (el === this.toggleColDef) {
        return true;
      } else {
        return this.checkedColumns.has(el);
      }
    });
  }

  isColumnVisible(col: string): boolean {
    return this.checkedColumns.has(col);
  }

  getDisplayedColumns(): string[] {
    return this.columnDefinitions
      .filter((cd) => cd.visible)
      .map((cd) => cd.def);
  }

  get isExpandAll() {
    return this.expandedElements.length == this.dataSource.data.length;
  }

  toggleExpandAllElements() {
    if (!this.isExpandAll) {
      this.expandedElements = [...this.dataSource.data];
    } else {
      this.expandedElements = [];
    }
  }

  toggleExpandElement(element: PeriodicElement) {
    const index = this.expandedElements.indexOf(element);
    if (index > -1) {
      this.expandedElements.splice(index, 1);
    } else {
      this.expandedElements.push(element);
    }
  }

  isElementExpanded(element) {
    return this.expandedElements.indexOf(element) > -1;
  }

  dropElement(
    event: CdkDragDrop<{
      parent: PeriodicElement;
      children: PeriodicElement[];
    }>,
    targetParent: PeriodicElement
  ) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        targetParent.children,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data.children,
        targetParent.children,
        event.previousIndex,
        event.currentIndex
      );
    }

    event.previousContainer.data.parent.children = [
      ...event.previousContainer.data.children,
    ];

    targetParent.children = [...targetParent.children];
    this.dataSource._updateChangeSubscription();
  }
}

let myDate: Date = new Date(1678886400000); // Pass the number as a timestamp to the Date constructor

export interface PeriodicElement {
  Name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
  children?: PeriodicElement[];
  DeliveryDay: string[];
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    Name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    DeliveryDay: ['Tu', 'We', 'Th'],
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 2,
    Name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    DeliveryDay: ['Th', 'Fr', 'Sa'],
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    position: 3,
    Name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    DeliveryDay: ['Mo', 'Tu', 'Fr'],
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
  {
    position: 4,
    Name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    DeliveryDay: ['Th'],
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
  },
  {
    position: 5,
    Name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    DeliveryDay: ['Su'],
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
  },
  {
    position: 6,
    Name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    DeliveryDay: ['Sa', 'Su'],
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
  },
  {
    position: 7,
    Name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    DeliveryDay: ['Mo', 'Tu', 'We', 'Th', 'Fr'],
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
  },
  {
    position: 8,
    Name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    DeliveryDay: ['Fr'],
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
  },
  {
    position: 9,
    Name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    DeliveryDay: ['We', 'Th', 'Sa'],
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
  },
  {
    position: 10,
    Name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    DeliveryDay: ['Su', 'Mo'],
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
];

/**
 * Dialog component with styling for full screen
 */
@Component({
  selector: 'dialog-content-example',
  templateUrl: 'dialog-content-example.component.html',
  styles: [
    `
    :host{
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    mat-dialog-content{
      max-height: unset !important;
      flex: 1 0 0;
    }
  `,
  ],
})
export class DialogContentExample {}
/**
 * Control column ordering and which columns are displayed.
 */

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
