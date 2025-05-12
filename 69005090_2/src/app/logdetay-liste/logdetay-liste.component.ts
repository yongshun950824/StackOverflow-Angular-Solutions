import { Component, OnInit } from '@angular/core';
import { Logdetay } from '../paylas/logdetay.model';
import { LogdetayService } from '../paylas/logdetay.service';

@Component({
  selector: 'app-logdetay-liste',
  templateUrl: './logdetay-liste.component.html',
  styleUrls: ['./logdetay-liste.component.css']
})
export class LogdetayListeComponent implements OnInit {
  list: Logdetay[];

  constructor(private service: LogdetayService) {}
  ngOnInit() {
    this.service.refreshList().subscribe(res => (this.list = res));
  }
}
