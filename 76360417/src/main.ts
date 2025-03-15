import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AdvertisementsService } from './advertisements.service';
import { Advertisement } from './advertisement';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  providers: [AdvertisementsService],
  template: `
  <div class="container-fluid">
  <div class="row">
    <div *ngFor="let adv of advs">
      <div class="col-12 col-sm-6 col-lg-3 col-xl-3">
        <a routerLink="details">
          <div class="card ">
            <div *ngFor="let img of adv.images">
              <img [src]="'data:image/image/png;base64,' + img.base64Image" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
              <div class="heading">
                <h4 class="text-center">{{adv.name}}</h4>
              </div>
              <p class="card-text">
                {{adv.description}}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  `,
})
export class App {
  name = 'Angular';

  advs: Advertisement[] = [];

  constructor(private advertisementService: AdvertisementsService) {}

  ngOnInit(): void {
    this.advertisementService.getAdvertisements().subscribe((data) => {
      for (let adv of data) {
        for (let img of adv.images) {
          console.log(img);
        }
      }
      this.advs = data;
    });
  }
}

bootstrapApplication(App);
