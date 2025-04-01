import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

interface GAMEDETAIL {
  id: number;
  title: string;
  releasedate: number;
  description: string;
  adddate: string;
  changedate: string;
  pdffile: string;
  youtubelink: string;
  images: any;
  producer: any;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  private data: any = [];
  gamedetail: GAMEDETAIL;
  gameid: number = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    //this.gamedetail = [];
  }

  ngOnInit(): void {
    this.gameid = parseInt(this.route.snapshot.paramMap.get('id') as string);

    this.getJSON(this.gameid).subscribe((data) => {
      this.gamedetail = data;
      console.log(this.gamedetail.title);
    });
  }

  getJSON(spielid: Number): Observable<GAMEDETAIL> {
    // return this.http.get<GAMEDETAIL[]>("https://example.org/api/gamedetail/" + spielid);

    return this.http.get<GAMEDETAIL>('/assets/data.json');
  }
}
