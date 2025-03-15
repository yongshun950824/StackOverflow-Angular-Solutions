import { InfoService } from '../services/info.service';
import { Component, OnInit } from '@angular/core';
import { info } from '../model/info.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class AboutMeComponent implements OnInit {
  info: info = new info('', '');

  constructor(public infoService: InfoService) {}

  ngOnInit(): void {
    this.infoService.getInfo().subscribe((data) => {
      this.info = data[0];
    });
  }
}
