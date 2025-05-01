import { Component, OnInit, VERSION } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from './services/data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns = ['start_time'];
  post: any[] = [];
  dataSource: MatTableDataSource<any>;

  constructor(private dataService: DataService) {}
  
  ngOnInit(): void {
    this.grabTime();
  }

  grabTime() {
    this.dataService.grabTimeContent().subscribe(res => {
      this.post = res.tableTime;

      this.dataSource = new MatTableDataSource(this.post);
    });
  }
}
