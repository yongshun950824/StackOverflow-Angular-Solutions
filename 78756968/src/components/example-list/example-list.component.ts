import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-example-list',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './example-list.component.html',
  styleUrl: './example-list.component.scss',
})
export class ExampleListComponent {}
