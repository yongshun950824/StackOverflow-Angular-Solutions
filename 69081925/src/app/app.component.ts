import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataModel, DataModels } from './data.model';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataloadService } from './serviceDemo.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private service: DataloadService) {}
  dataModel: DataModel[] = []; //DataModels
  dataCtrl: FormControl = new FormControl();
  dataFilterCtrl: FormControl = new FormControl();
  filteredData: ReplaySubject<DataModel[]> = new ReplaySubject<DataModel[]>(1);
  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

  _onDestroy = new Subject<void>();

  ngOnInit() {
    this.load();

    // this.dataModel is empty array  as response is asynchronous
    console.log('DataModel after load()', this.dataModel.slice());
    //this.filteredData.next(this.dataModel.slice());

    this.testSubscribeFilteredData();

    this.dataFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterData();
      });
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  filterData() {
    if (!this.dataModel) {
      return;
    }
    let search = this.dataFilterCtrl.value;
    if (!search) {
      this.filteredData.next(this.dataModel.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredData.next(
      this.dataModel.filter(
        (x: any) => x.title.toLowerCase().indexOf(search) > -1
      )
    );
  }
  load() {
    return this.service.LoadData().subscribe(res => {
      this.dataModel = res;

      console.log('DataModel within subscribe', this.dataModel);
      this.filteredData.next(this.dataModel.slice());
    });
  }

  testSubscribeFilteredData() {
    this.filteredData.subscribe(data => {
      console.log('Subscribed filteredData', data);
    });
  }
}
