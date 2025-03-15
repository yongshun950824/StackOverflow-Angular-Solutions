import { Component, OnInit } from '@angular/core';
import { ImageGridComponent } from '../image-grid/image-grid.component';

@Component({
  standalone: true,
  selector: 'app-photo-gallery',
  imports: [ImageGridComponent],
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css'],
})
export class PhotoGalleryComponent implements OnInit {
  images = [1, 2, 3, 5, 6, 7, 8, 9, 10];

  constructor() {}

  ngOnInit() {}
}
