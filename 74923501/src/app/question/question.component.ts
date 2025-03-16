import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AppService } from '../app.service';
import { AppData } from '../models/app-data';
import { Question } from '../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [AppService],
})
export class QuestionComponent implements OnInit {
  app_data: AppData;
  question: Question;

  constructor(private appService: AppService, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.appService.app_data.subscribe((v) => {
    //   this.app_data = v;
    // });

    // this.route.queryParams.subscribe((p) => {
    //   console.log(p)
    //   this.question = this.appService.app_data.questions.find(
    //     (i) => i.id === p.id
    //   );
    // });

    combineLatest([this.appService.app_data, this.route.queryParams]).subscribe(
      ([appData, param]) => {
        console.log(appData);
        console.log(param);

        this.app_data = appData;
        this.question = appData.questions.find((i) => i.id === param.id);
      }
    );
  }
}
