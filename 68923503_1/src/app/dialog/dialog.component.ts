import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  displayDialog: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  showDialog() {
      this.displayDialog = true;
  }

  cancel(){
    this.displayDialog = false;
  }
}