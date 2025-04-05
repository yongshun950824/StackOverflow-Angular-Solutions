import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  server!: SERVERS_VALUE;

  private origin: typeof SERVERS.SERVER_A | typeof SERVERS.SERVER_B =
    SERVERS.SERVER_A;

  onChange(e: any) {
    this.server = e.value;
    this.setServer(this.server); // Argument of type 'string' is not assignable to parameter of type '"A" | "B"'.
  }

  // OR setServer(server: SERVERS_VALUE)
  setServer(server: 'A' | 'B') {
    console.log(server);
  }
}

const SERVERS = {
  SERVER_A: 'A',
  SERVER_B: 'B',
} as const;

type SERVERS_VALUE = typeof SERVERS[keyof typeof SERVERS];
