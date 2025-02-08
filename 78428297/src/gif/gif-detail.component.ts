// gif-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gif-detail',
  template: `<h1>{{ title }}</h1>`
})
export class GifDetailComponent implements OnInit {
  title: string = ''; // Initialize title to an empty string

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title') || '';
  }
}