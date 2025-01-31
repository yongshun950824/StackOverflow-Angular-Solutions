import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  getNavHeight() {
    const navElement = document.getElementsByTagName('nav')[0]!;

    return navElement.offsetHeight;
  }
}
