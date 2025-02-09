import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { RouterOutlet } from '@angular/router';
//import { HeaderComponent } from './header/header.component';
import { StroyComponent } from './stroy/stroy.component';
import { NgModel } from '@angular/forms';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    /*HeaderComponent,*/ StroyComponent,
    NgForOf /*CommonModule,*/,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CatsBookProject';
  postText = [
    'Hello , i am here to meet new friends and make a friends         relationship',
    'Hello everyone, Iam glad you are here',
    'Hey, my name is Susanne. I amm 2 years old',
    'I like eating cookies.',
  ];
  postImgs = [
    'assets/Imge/img1.png',
    'assets/Imge/im21.png',
    'assets/Imge/img3.jpg',
    'assets/Imge/img4.jpg',
  ];
  buttonClicked() {
    alert("What's up");
  }
}

bootstrapApplication(AppComponent);
