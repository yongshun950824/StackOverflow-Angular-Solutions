import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { FlightSelectionService } from './FlightSelection.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
  imports: [FormsModule],
  providers: [FlightSelectionService],
})
export class App {
  name = 'Angular';

  constructor(public flightSelectionService: FlightSelectionService) {}
}

bootstrapApplication(App);
