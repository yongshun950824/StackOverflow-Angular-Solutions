import { Component, inject, Input } from '@angular/core';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { JsonPipe, TitleCasePipe } from '@angular/common';
import { Subtask } from '../subtask';

@Component({
  selector: 'app-chip-field',
  standalone: true,
  imports: [
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatOption,
    MatSelect,
    MatInput,
    TitleCasePipe,
    JsonPipe,
  ],
  templateUrl: './chip-field.component.html',
  styleUrl: './chip-field.component.css',
})
export class ChipFieldComponent {
  @Input() control!: FormControl;
  @Input() controlTitle!: string;
  @Input() taskId!: number | undefined;
  keywords: Subtask[] = [];
  announcer = inject(LiveAnnouncer);

  removeKeyword(keyword: Subtask) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);
      this.announcer.announce(`removed ${keyword}`);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.keywords.push({
        id: 0,
        taskId: this.taskId ?? 0,
        isDone: false,
        description: value,
      } as Subtask);
    }

    event.chipInput!.clear();
  }

  ngOnInit() {
    this.keywords = this.control.value;
  }
}
