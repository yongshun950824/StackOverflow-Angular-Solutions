import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  maxChars = 100;
  newproxyAddr = '';

  public validation(addr: any) {
    const checkEnclosedPattern =
      /[@()\[\]{};,:.<>](?=(?:(?:[^"]*"){2})*[^"]*$)/;

    console.log(checkEnclosedPattern.test(addr.toString()));
  }
}
