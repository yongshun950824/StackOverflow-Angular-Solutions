import { SelectionModel } from '@angular/cdk/collections';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Component, ViewChild } from '@angular/core';
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
export class TableExpandableRowsExample {
  columnsToDisplay: string[] = [
    //'action',
    'Name',
    'weight',
    'symbol',
    'position',
    'DeliveryDate',
  ];

  columns: any[] = ['Name', 'weight', 'symbol', 'position', 'Delivery Date'];
  // columnsToReorder: string[] = ['Name', 'weight', 'symbol', 'position'];
  columnsToDisplayWithExpand = ['select', 'action', ...this.columnsToDisplay];

  dataSource = new MatTableDataSource<PeriodicElement>(
    ELEMENT_DATA.map((x) => ({ ...x, children: [x] }))
  );
  expandedElement: PeriodicElement | null;
  selection = new SelectionModel<PeriodicElement>(true, []);

  expandedElements: PeriodicElement[] | null = [];

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(
  //     this.columnsToReorder,
  //     event.previousIndex,
  //     event.currentIndex
  //   );
  // }
  previousIndex: number;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;

    this.dataSource.filterPredicate = (
      data: PeriodicElement,
      filter: string
    ) => {
      const defaultFilter = (
        data: PeriodicElement,
        filter: string
      ): boolean => {
        const dataStr = Object.keys(data)
          .map((key) => data[key])
          .reduce((acc, curr) => acc + curr, '')
          .toLowerCase();
        return dataStr.includes(filter.toLowerCase());
      };

      const defaultFilterResult = defaultFilter(data, filter);

      const parseDate = (dateString: string) => {
        const date = new Date(dateString);
        return {
          isDate: !isNaN(date.getTime()),
          value: date,
        };
      };

      const dateResult = parseDate(filter);

      const deliveryDateColumnFilterResult =
        dateResult.isDate &&
        data.DeliveryDate.getFullYear() === dateResult.value.getFullYear() &&
        data.DeliveryDate.getMonth() === dateResult.value.getMonth() &&
        data.DeliveryDate.getDate() === dateResult.value.getDate();

      return defaultFilterResult || deliveryDateColumnFilterResult;
    };
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

  trackByColumn(index: number, column: string) {
    return column;
  }

  trackByChild(index: number, child: PeriodicElement) {
    return child;
  }

  applyFilter(filterValue: string, column: string) {
    if (column === 'DeliveryDate') {
      filterValue = filterValue.toString();
    }

    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    console.log('filterValue', filterValue);
    this.dataSource.filter = filterValue;
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
  DeliveryDate: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    Name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    DeliveryDate: new Date('12/1/25'),
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 2,
    Name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    DeliveryDate: new Date('12/2/25'),
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    position: 3,
    Name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    DeliveryDate: new Date('12/3/25'),
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
  {
    position: 4,
    Name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    DeliveryDate: new Date('12/4/25'),
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
  },
  {
    position: 5,
    Name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    DeliveryDate: new Date('12/5/25'),
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
  },
  {
    position: 6,
    Name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    DeliveryDate: new Date('12/6/25'),
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
  },
  {
    position: 7,
    Name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    DeliveryDate: new Date('12/7/25'),
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
  },
  {
    position: 8,
    Name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    DeliveryDate: new Date('12/8/25'),
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
  },
  {
    position: 9,
    Name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    DeliveryDate: new Date('12/9/25'),
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
  },
  {
    position: 10,
    Name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    DeliveryDate: new Date('12/10/25'),
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
];
/**
 * Control column ordering and which columns are displayed.
 */

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
