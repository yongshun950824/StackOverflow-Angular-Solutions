import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  template: `<h1>Test</h1>
    <div class="container">
  <div class="row">
    <div class="col-2">
      <a [routerLink]="[{ outlets:{ outlet1: ['home'] }}]" routerLinkActive="active"><button type="button" class="btn btn-primary">
          Home</button></a>
    </div>
    <div class="col-1">
      <a [routerLink]="['experiment', { outlets:{ outlet1: ['test'] }}]"><button type="button" class="btn btn-primary">
          Test</button></a>
    </div>

  </div>
</div>
  `,
  imports: [RouterModule],
})
export class TestComponent {}
