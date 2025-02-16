import 'zone.js';
import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <p [ngClass]="idPresent ? 'alert alert-success' : 'alert alert-danger'">
      Working
    </p>

  <p [ngClass]="idValueClass">
    Not working
  </p>


  <button class="btn btn-primary" (click)="onClick()">Update</button>
  <br />
  Current idPresent: {{ idPresent }}

  `,
  imports: [CommonModule],
})
export class App implements OnChanges {
  public idPresent = false;

  // public idValueClass = {
  //   'alert alert-success': this.idPresent,
  //   'alert alert-danger': !this.idPresent,
  // };

  public idValueClass = {
    alert: true,
    'alert-success': this.idPresent,
    'alert-danger': !this.idPresent,
  };

  onClick() {
    this.idPresent = !this.idPresent;
    this.idValueClass = {
      alert: true,
      'alert-success': this.idPresent,
      'alert-danger': !this.idPresent,
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
    this.idValueClass = {
      alert: true,
      'alert-success': this.idPresent,
      'alert-danger': !this.idPresent,
    };
  }
}

bootstrapApplication(App);
