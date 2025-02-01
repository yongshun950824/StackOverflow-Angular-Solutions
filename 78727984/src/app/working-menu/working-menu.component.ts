import { Component, OnInit } from '@angular/core';
import { CdkMenuModule } from '@angular/cdk/menu';

import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-working-menu',
  standalone: true,
  templateUrl: './working-menu.component.html',
  styleUrl: './working-menu.component.scss',
  imports: [CdkMenuModule, RouterModule],
})
export class WorkingMenuComponent {}
