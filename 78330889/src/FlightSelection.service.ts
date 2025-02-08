import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightSelectionService {
  startingCity: string = '';
  endingCity: string = '';

  constructor() {}
}
