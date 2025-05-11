import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from './cliente.service';
import { Client } from './client.class';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  editIndex = 0;
  public displayedColumns: string[] = ['name'];
  public client: Client;
  public clients: Client[];

  dataSource: MatTableDataSource<Client>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public fb: FormBuilder, 
    private clienteService: ClienteService) {}

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clienteService.list().subscribe(client => {
      this.clients = client;
      this.dataSource = new MatTableDataSource(this.clients);
      this.dataSource.paginator = this.paginator;
    });
  }
}
