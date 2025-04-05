import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../../shared-component/dialog-box/dialog-box.component';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css'],
})
export class Tab1Component implements OnInit {
  arr: any = [];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '500px',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      //result.map((x:any) =>{})
      console.log('Dialog result ->', result);
      this.arr.push(result);
      console.log('new arr ->', this.arr);
    });
  }
}
