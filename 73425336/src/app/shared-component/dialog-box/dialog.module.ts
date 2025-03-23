import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBoxComponent } from './dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    PickerModule,
  ],
  declarations: [DialogBoxComponent],
  entryComponents: [DialogBoxComponent],
})
export class DialogModuleModule {}
