import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialThemeModule } from './material-theme.module';

@NgModule({
  exports: [CommonModule, MaterialThemeModule],
})
export class SharedModule {}
