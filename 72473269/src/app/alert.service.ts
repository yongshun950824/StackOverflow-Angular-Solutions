import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {
  constructor() {}

  success(msg: string) {
    alert(`Success: ${msg}`);
  }

  error(msg: string) {
    alert(`Error: ${msg}`);
  }

  clear() {}
}
