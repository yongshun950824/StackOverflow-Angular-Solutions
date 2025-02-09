import { Component, ElementRef, ViewChild } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `main.html`,
})
export class App {
  @ViewChild('openMessage', { static: true })
  openMessage!: ElementRef<HTMLElement>;

  ngOnInit() {
    //this.openModal();
    this.openBsTab();
  }
  private openModal() {
    console.log('openModal');
    let elementModal: HTMLElement = this.openMessage.nativeElement;
    console.log(elementModal);
    elementModal.click();
  }

  @ViewChild('openTab', { static: true })
  openTab!: ElementRef<HTMLElement>;

  private openBsTab() {
    let elementTab: HTMLElement = this.openTab.nativeElement;
    console.log('elementTab', elementTab);
    elementTab.click();
  }
}

bootstrapApplication(App);
