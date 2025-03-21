import { Component, VERSION } from '@angular/core';
import { CollectionStore } from './collection.store';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  trigger = false;

  constructor(private collectionsStore: CollectionStore, private toastr: ToastrService) {}

  // Dummy
  handleMoveRowsDown() {
    this.collectionsStore.moveRowsDown().subscribe(
      (collection) => {
        // this.table.sorts = [];
        // this.rowsSorted = true;
        // this.collection = collection;
        // this.table.rows = this.collection.rows;
      },
      (error) => {
        console.error(error);
        this.toastr.error("You've hit bottom!"); // throw toast if "trigger" is true
        //this.selectedRows = [];
      }
    );
  }
  
}
