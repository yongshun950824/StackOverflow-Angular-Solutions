import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-matautocom',
  templateUrl: './matautocom.component.html',
  styleUrls: ['./matautocom.component.css']
})
export class MatautocomComponent implements OnInit {

  names: string[] = ['ghui', 'ustu', 'caty','momo', 'rekh', 'john', 'kemp'];
  myControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]> | undefined;
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
 
     return this.names.filter((option) =>  {
       console.log(filterValue)
      option.toLowerCase().includes(filterValue);
      return option;
    })   
   
  }

}