export interface LineResetTable {
  table: Table;
}

export interface Table {
  class: string;
  headings?: Column[];
  rows: Row[];
}

export interface Row {
  rowId?: number;
  class: string;
  columns: Column[];
}

export interface Column {
  content: string;
  class: string;
  tooltipIcon?: string;
  tooltip?: string;
  hrefLink?: string;
  routerLink?: string;
}

export const lineResetTable: LineResetTable = {
  table: {
    class: '',
    headings: [
      {
        content: 'Tercih',
        class: 'col-sm-12 col-md-4 font-size-12 font-weight-400 slate-grey',
      },
      {
        content: 'Durum',
        class: 'col-sm-12 col-md-4 font-size-12 font-weight-400 slate-grey',
      },
      {
        content: 'İşlem',
        class: 'col-sm-12 col-md-4 font-size-12 font-weight-400 slate-grey',
      },
    ],
    rows: [
      {
        rowId: 1,
        class: '',
        columns: [
          {
            content: 'A',
            class: 'col-sm-12 col-md-4 font-size-16 font-weight-700 solid-dark',
          },
          {
            content: 'A',
            class: 'col-sm-12 col-md-4 font-size-16 font-weight-600 slate-grey',
          },
          {
            content: 'A',
            class:
              'col-sm-12 col-md-4 font-size-16 font-weight-400 solid-primary-product-mobile-product pointer-cursor',
          },
        ],
      },
      {
        rowId: 2,
        class: '',
        columns: [
          {
            content: 'C',
            class: 'col-sm-12 col-md-4 font-size-16 font-weight-700 solid-dark',
          },
          {
            content: 'B',
            class: 'col-sm-12 col-md-4 font-size-16 font-weight-600 slate-grey',
          },
          {
            content: 'B',
            class:
              'col-sm-12 col-md-4 font-size-16 font-weight-400 solid-primary-product-mobile-product',
          },
        ],
      },
      {
        rowId: 3,
        class: '',
        columns: [
          {
            content: 'B',
            class: 'col-sm-12 col-md-4 font-size-16 font-weight-700 solid-dark',
          },
          {
            content: 'C',
            class: 'col-sm-12 col-md-4 font-size-16 font-weight-600 slate-grey',
          },
          {
            content: 'A',
            class:
              'col-sm-12 col-md-4 font-size-16 font-weight-400 solid-primary-product-mobile-product',
          },
        ],
      },
      {
        rowId: 4,
        class: '',
        columns: [
          {
            content: 'C',
            class: 'col-sm-12 col-md-4 font-size-16 font-weight-700 solid-dark',
          },
          {
            content: 'F',
            class: 'col-sm-12 col-md-4 font-size-16 font-weight-600 slate-grey',
          },
          {
            content: 'D',
            class:
              'col-sm-12 col-md-4 font-size-16 font-weight-400 solid-primary-product-mobile-product',
          },
        ],
      },
    ],
  },
};
