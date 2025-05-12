import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { KeyValuePair } from '../models/key-value-pair';
import { Post } from '../models/post.model';
import { DataCollectorService } from '../services/data-collector.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  analysisType: string = 'Posts';
  //limit       : number = initLimitValue;
  limit: number = 1000;

  posts$!: Observable<KeyValuePair<Post>>;

  constructor(public dataCollectorService: DataCollectorService) {}

  ngOnInit(): void {
    this.posts$ = this.dataCollectorService
      .squeezePosts(this.analysisType, this.limit)
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      );
  }
}
