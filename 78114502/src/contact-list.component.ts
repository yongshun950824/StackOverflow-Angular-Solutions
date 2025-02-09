import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from './contact.service';
import { firstValueFrom } from 'rxjs';
import { Contact } from './backend.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

const COLUMNS_SCHEMA = [
  {
    key: 'id',
    type: 'text',
    label: 'Id',
  },
  {
    key: 'name',
    type: 'text',
    label: 'Name',
  },
  {
    key: 'email',
    type: 'text',
    label: 'E-mail',
  },
];
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  //styleUrl: './contact-list.component.css',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatTableModule],
})
export class ContactListComponent implements OnInit {
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<Contact>;
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  columnsSchema: any = COLUMNS_SCHEMA;

  contacts: any[] = [];
  constructor(private contactService: ContactService) {}
  async ngOnInit(): Promise<void> {
    const data: any = await firstValueFrom(this.contactService.getContacts());
    console.log(data);
    this.contacts = data;

    this.dataSource = new MatTableDataSource(this.contacts);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.displayedColumns);
  }
}
