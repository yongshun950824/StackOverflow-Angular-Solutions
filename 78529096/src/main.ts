import {
  ChangeDetectorRef,
  Component,
  NgZone,
  Signal,
  afterRender,
  computed,
  signal,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { of } from 'rxjs';
import 'zone.js';
import { ApiService } from './api.service';
import { JsonPipe } from '@angular/common';

export interface Carrusel {
  file: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [JsonPipe],
})
export class App {
  name = 'Angular';

  slides: Carrusel[] = [];

  constructor(
    private apiService: ApiService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    // Solution 2
    afterRender(() => {
      this.getCarrusel();
    });
  }

  // Solution 1
  ngOnInit() {
    // Solution 1
    ///this.getCarrusel();
  }

  getCarrusel() {
    this.apiService.getCarrusel().subscribe((data: Carrusel[]) => {
      this.slides = data;

      this.changeDetectorRef.detectChanges();
    });
  }
}

bootstrapApplication(App);
