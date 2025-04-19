import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ItemsService],
})
export class LoginComponent implements OnInit {
  displayedColumns: string[] = ['idItem', 'nameItem', 'options'];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  itemList: Items[] = [];
  dataSource = [];

  constructor(private itemService: ItemsService) {}

  ngOnInit(): void {
    this.itemList = [];
    this.itemService.list().subscribe((data) => {
      data.forEach((element) => {
        this.itemList.push({
          idItem: element.idItem,
          nameItem: element.nameItem,
        });
      });
      this.dataSource = this.itemList;
    });
  }
}

export class Items {
  idItem: number;
  nameItem: string;
}
