import {
  ChangeDetectorRef,
  Component,
  QueryList,
  ViewChild,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ReplaySubject, Subject, take, takeUntil } from 'rxjs';
import 'zone.js';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import {
  MatOption,
  MatSelect,
  MatSelectModule,
} from '@angular/material/select';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgFor,
    NgIf,
    AsyncPipe,
    NgxMatSelectSearchModule,
  ],
})
export class App {
  // modules = [
  //   { value: 'Module 1', viewValue: 'Module 1' },
  //   { value: 'Module 2', viewValue: 'Module 2' },
  //   { value: 'Module 3', viewValue: 'Module 3' },
  //   { value: 'Module 4', viewValue: 'Module 4' },
  //   { value: 'Module 5', viewValue: 'Module 5' },
  // ];
  public control: FormControl = new FormControl();
  private _onDestroy = new Subject<void>();
  public filteredRecords: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  @ViewChild('drop') select!: MatSelect;

  modules: any[] = ['ALL', 'lorem', 'ipsum', 'domor', 'sit', 'amet'];
  selectedModules: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.setInitialValue();
    this.control.setValue([]);
    this.filteredRecords.next(this.modules.slice());
    this.cdr.detectChanges();

    this.control.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this.filterModulesMulti();
    });
  }

  private setInitialValue() {
    this.filteredRecords
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.select.compareWith = (a: any, b: any) => a === b;
      });
  }

  private filterModulesMulti() {
    if (!this.modules) {
      return;
    }

    let search = this.control.value;
    if (!search) {
      this.filteredRecords.next(this.modules.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    if (search.length >= 2) {
      this.filteredRecords.next(
        this.modules.filter(
          (module) => module.toLowerCase().indexOf(search) > -1
        )
      );
    }
  }

  /*onKey(value) {
    const input = event.target as HTMLInputElement;
    this.selectedModules = this.search(value);
  }

  search(value: string) {
    let filter = value.toLowerCase();
    return this.modules.filter(option => option.toLowerCase().startsWith(filter));
  }*/

  clearFields() {
    this.selectedModules = [];
  }

  isAllSelected(): boolean {
    return this.selectedModules.includes('ALL');
  }

  onClick(options: QueryList<MatOption>, isFirst: boolean = false) {
    if (isFirst) {
      const el = options.first;
      options.forEach((x) => {
        x[el.selected ? 'select' : 'deselect']();
      });
      if (el.selected) {
        //new
        this.selectedModules = this.modules.slice();
      } else {
        this.selectedModules = [];
      } // end new
    } else {
      const selected = options.filter((x, index) => index && x.selected);
      if (selected.length == this.modules.length - 1) {
        options.first.select();
        this.selectedModules = this.modules.slice();
      } else {
        options.first.deselect();
        this.selectedModules = selected.map((x) => x.value);
      }
    }
  }
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});
