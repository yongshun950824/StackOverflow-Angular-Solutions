import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss',
})
export class WorkspaceComponent {
  constructor(private router: Router) {}

  navigateToExampleList() {
    //this.router.navigate(["w", "list"])
    this.router.navigate(['/w', { outlets: { workspace: ['list'] } }]);
  }
}
