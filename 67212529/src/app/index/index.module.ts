import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IndexComponent } from './index.component';

import {
  MenuFoldOutline,
  MenuUnfoldOutline
} from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const icons: IconDefinition[] = [MenuFoldOutline, MenuUnfoldOutline];

@NgModule({
  declarations: [
    //ShellComponent
    IndexComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzIconModule.forChild(icons)
  ],
  exports: [IndexComponent]
})
export class IndexModule {}
