import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { List } from '../list';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'first_name', 'login', 'phone'];
  users!: MatTableDataSource<List>;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.onGetUsers();
  }

  onGetUsers(): void {
    this.usersService.getUsers().subscribe((response) => {
      this.users = new MatTableDataSource<List>(response.list);
    });
  }
}
