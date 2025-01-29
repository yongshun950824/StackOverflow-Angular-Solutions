import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PaginatePipe } from 'ngx-pagination';
import { ToastrService } from 'ngx-toastr';
// import { TransactionService } from 'src/app/features/admin/services/transaction.service';
// import {
//   ITransactionCreatedDateList,
//   ICreatedPageResult,
//   ICreatedResponse,
//   ICreatedPagingFilter,
// } from 'src/app/features/admin/models/transaction/transaction-created-date-list.model';
import { DatePipe, CurrencyPipe, CommonModule } from '@angular/common';
import { OrderPipe } from 'ngx-order-pipe';
// import { saveAs } from 'file-saver';
import { interval, Subscription } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import {
  BsDatepickerConfig,
  BsDatepickerDirective,
  BsDatepickerModule
} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-created-date-transactions',
  templateUrl: './created-date-transactions.component.html',
  styleUrls: ['./created-date-transactions.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, BsDatepickerModule],
  providers: [DatePipe, CurrencyPipe],
})
export class CreatedDateTransactionsComponent {
  bsModalRef?: any; //BsModalRef;
  search = 'Search';
  transactionList: any;
  columns: any[] = [];
  columnsWithFeatures: any;
  isLoading = false;
  showModal!: boolean;
  selectedSearchCriteria: any;
  order: string = 'createDate';
  reverse: boolean = false;
  allTransactionList!: any[]; //ITransactionCreatedDateList[];
  pageResult!: any; //ICreatedPageResult<ITransactionCreatedDateList[]>;
  filter: any /*ICreatedPagingFilter*/ = {
    searchQuery: '',
    sortBy: '',
    isSortAscending: true,
    startDate: null,
    endDate: null,
    pageNumber: 1,
    pageSize: 10,
    exportToExcel: false,
  };
  minStartDate!: Date;
  minEndDate!: Date;
  maxStartDate!: Date;
  maxEndDate!: Date;
  startingIndex: number = 0; // Initialize with 0
  searchButtonClicked = false;
  private refreshSubscription!: Subscription;
  pageTitle = '';
  endDateBsConfig?: Partial<BsDatepickerConfig> = {
    isAnimated: true,
    dateInputFormat: 'DD-MM-YYYY',
    returnFocusToInput: true,
    showClearButton: true,
    clearPosition: 'right',
    //keepDatesOutOfRules: true,
  };


  constructor(
    //private transactionService: TransactionService,
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
    private toastr: ToastrService // private modalService: BsModalService, // private orderPipe: OrderPipe, // private paginatePipe: PaginatePipe
  ) {
    const today = new Date();
    this.maxStartDate = today;
    this.minStartDate = new Date();
    this.minStartDate.setFullYear(today.getFullYear() - 1);
    this.maxEndDate = today;
    this.minEndDate = new Date();
    this.minEndDate.setFullYear(today.getFullYear() - 1);

    this.setEndDateDatepickerBsConfig();
  }

  ngOnInit(): void {
    this.isLoading = true;
  }

  validateDateRange(startDate: Date, endDate: Date): boolean {
    const oneMonthInMilliseconds = 30 * 24 * 60 * 60 * 1000; // Approx. one month
    return (
      Math.abs(endDate.getTime() - startDate.getTime()) <=
      oneMonthInMilliseconds
    );
  }

  validateSearchDateRange() {
    if (this.filter.startDate && this.filter.endDate) {
      const startDate = new Date(this.filter.startDate);
      const endDate = new Date(this.filter.endDate);

      // Calculate the difference in months
      const monthDifference =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth());

      if (Math.abs(monthDifference) > 1) {
        this.toastr.warning('Date range cannot exceed one month');

        // Reset end date to exactly one month after start date
        const adjustedEndDate = new Date(startDate);
        adjustedEndDate.setMonth(startDate.getMonth() + 1);

        this.filter.endDate = adjustedEndDate;

        // Recalculate min and max dates for both inputs
        this.minEndDate = startDate;
        this.maxEndDate = adjustedEndDate;
        this.minStartDate = new Date(
          startDate.getFullYear() - 1,
          startDate.getMonth(),
          startDate.getDate()
        );
        this.maxStartDate = new Date();

        // console.log('adjustedEndDate', adjustedEndDate);
        // console.log('this.filter.endDate', this.filter.endDate);
        // console.log('minEndDate', this.minEndDate);
        // console.log('maxEndDate', this.maxEndDate);

        this.setEndDateDatepickerBsConfig();
      }
    }
  }

  updateBsConfig(): void {
    this.filter.startDate
      ? (this.maxEndDate = this.filter.startDate)
      : (this.maxEndDate = new Date());
    this.filter.endDate
      ? (this.maxStartDate = this.filter.endDate)
      : (this.maxStartDate = new Date());
  }

  loadAllTransactions() {
    this.updateBsConfig();
    // this.transactionService
    //   .getAllTransactionsByCreatedDateFilter(this.filter)
    //   .subscribe((result: any) => {
    //     this.pageResult = result;
    //     this.allTransactionList = result.pageItems;
    //     this.isLoading = false;
    //   });
  }

  onSearch() {
    this.validateSearchDateRange();
    this.searchButtonClicked = true;
    this.filter.pageNumber = 1;
    this.loadAllTransactions();
  }

  onDateRangeSelected(startDate: Date | null, endDate: Date | null) {
    if (startDate && endDate) {
      if (this.validateDateRange(startDate, endDate)) {
        this.filter.startDate = startDate;
        this.filter.endDate = endDate;
        this.loadAllTransactions();
      } else {
        this.toastr.error('The selected date range cannot exceed one month.');

        // Reset the filter dates to `null` to clear invalid selections
        this.filter.startDate = null;
        this.filter.endDate = null;
      }
    } else {
      this.toastr.error(
        'Invalid date selection. Please select valid start and end dates.'
      );

      // Reset the filter dates to avoid further issues
      this.filter.startDate = null;
      this.filter.endDate = null;
    }
  }

  onExportToExcel() {}

  setEndDateDatepickerBsConfig() {
    this.endDateBsConfig = {
      ...this.endDateBsConfig,
      minDate: this.minEndDate,
      maxDate: this.maxEndDate,
    };
  }
}
