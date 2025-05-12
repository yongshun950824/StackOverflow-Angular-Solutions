import {Component, OnInit,ViewChild} from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';

/**
 * @title Binding event handlers and properties to the table rows.
 */
@Component({
  selector: 'app-players',
  styleUrls: ['players.component.css'],
  templateUrl: 'players.component.html',
})
export class PlayersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'pop'];
  dataSource = new MatTableDataSource<Player>();
  
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  
  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getPlayers().subscribe(players => {
      console.log(players);
      this.dataSource.data = players;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  clickedRows = new Set<Player>();
}