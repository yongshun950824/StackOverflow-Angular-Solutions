import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  template: `<h1>Test</h1>
    <div class="container">
  <div class="row">
    
    <div class="col-1">
      <!--<a [routerLink]="['experiment/test']">
        <button type="button" class="btn btn-primary">
          Test
        </button>
      </a>-->

        <button type="button" class="btn btn-primary" [routerLink]="['experiment/test']">
          Test
        </button>
    </div>

  </div>
</div>
  `,
  imports: [RouterModule],
})
export class TestComponent {}
