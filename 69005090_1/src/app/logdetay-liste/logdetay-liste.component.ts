import { Component, OnInit } from '@angular/core';
import { LogdetayService } from '../paylas/logdetay.service';

@Component({
  selector: 'app-logdetay-liste',
  templateUrl: './logdetay-liste.component.html',
  styleUrls: ['./logdetay-liste.component.css']
})
export class LogdetayListeComponent implements OnInit {
  constructor(public service: LogdetayService) {}
  ngOnInit() {
    this.service.refreshList();
  }
}
