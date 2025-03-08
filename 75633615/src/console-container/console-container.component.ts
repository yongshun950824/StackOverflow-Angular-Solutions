import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map, Observable, scan } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-console-container',
  template: `
  <p>Console</p>
  <p *ngFor="let message of messages$ | async" >{{message}}</p>

  <button (click)="addMessage()">Click</button>  `,
  imports: [CommonModule],
  standalone: true,
})
export class ConsoleContainerComponent implements OnInit {
  //public msgsArr: string[] = [];
  i: number = 1;

  public messages$: Observable<string[]> = new Observable<string[]>();
  constructor(private msgsvc: MessageService) {}

  ngOnInit(): void {
    this.messages$ = this.msgsvc
      .getMsg()
      .pipe(scan((acc: string[], x: string) => [...acc, x], []));
  }

  addMessage() {
    this.msgsvc.pushMsg(`New message ${this.i++}`);
  }
}
