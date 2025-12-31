import { Component } from '@angular/core';
import { ChildComponent } from './component/child/child.component';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
  //imports: [AppModule],
})
export class AppComponent {
  title = 'PracticeThiryOctober';
  number: number = 234232;

  get counter() {
    return this.number;
  }

  set counter(value) {
    this.number = value;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
