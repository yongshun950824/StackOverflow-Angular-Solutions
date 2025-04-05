import { Component, OnInit } from '@angular/core';
import { IndiceService } from './indice.service';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {

  indiceDatas: any;
  startDate: any;

  constructor(private service : IndiceService) { }

  ngOnInit(): void {
    this.indiceDatas = this.service.indiceDatas;
    this.startDate = this.service.startDate;
  }

}
