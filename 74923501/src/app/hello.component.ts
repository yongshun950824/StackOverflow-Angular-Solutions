import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello!</h1> <span>Click the question link.</span>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {}
