import {
  Component,
  Input,
  OnInit,
  ViewChild,
  TemplateRef,
  ChangeDetectorRef,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavItem } from './nav-item';
import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  standalone: true,
  imports: [
    CdkMenuModule,
    CommonModule,
    RouterModule,
    NgFor,
    MenuItemComponent,
  ],
})
export class MenuItemComponent implements OnInit {
  @Input() items?: NavItem[];
  @ViewChild('childMenu', { static: true }) public childMenu!: TemplateRef<any>;

  constructor(public router: Router) {}

  ngOnInit() {}
}
