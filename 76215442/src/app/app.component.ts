import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {MatSortModule} from '@angular/material/sort';
import {MatSort} from '@angular/material/sort';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  standalone: false
})

export class AppComponent implements OnInit  {

  @ViewChild(MatSort) sort!: MatSort;

  REQUESTS = [
    {type: 'TypeA', name: 'RequestA', amount: 1000, status: 'Draft', dateModified: 1111112211111},
    {type: 'TypeB', name: 'RequestC', amount: 5, status: 'Submitted', dateModified: 1111991111111},
    {type: 'TypeA', name: 'RequestG', amount: 200, status: 'Submitted', dateModified: 1111111441111},
    {type: 'TypeC', name: 'RequestM', amount: 0, status: 'Closed', dateModified: 1111111155111},
    {type: 'TypeE', name: 'RequestB', amount: 0, status: 'Draft', dateModified: 1111111111111},
    {type: 'TypeD', name: 'RequestL', amount: 2000, status: 'Closed', dateModified: 1122111111111},
  ];

  dataSource = new MatTableDataSource(this.REQUESTS);
  columnsToDisplay = ['type', 'name',  'status', 'amount','dateModified', 'state'];
  dataSubject = new BehaviorSubject<Element[]>([]);

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    // Filter Icon
    this.matIconRegistry.addSvgIcon(
      `filterIcon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`https://image.flaticon.com/icons/svg/1159/1159641.svg`)
    );
    // Sort Icon
    this.matIconRegistry.addSvgIcon(
      `sortIcon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`https://image.flaticon.com/icons/svg/25/25756.svg`)
    );
    this.dataSource.data = this.REQUESTS;
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  // Dynamically set the SVG elements' class to change their color depending on the request status
  getStateColor(status: string) {
    switch(status) {
      case ('Submitted'):
      case ('Draft'):
        return 'green-svg';
        break;
      
      case ('Closed'):
        return 'gray-svg';
        break;
    }

    return '';
  }

  // If a request amount is zero, display "FREE", else display the amount
  getAmount(amount: number) {
    return (amount === 0 ? 'FREE' : amount+" €");
  }
 getTotal(){
   return  100;
 }
}