import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

type OptionValue = Readonly<{
  title: string;
  value: string;
}>;

type OptionItem = OptionValue | string;

@Component({
  selector: 'app-select',
  standalone: true,
  styleUrls: ['./select.component.css'],
  imports: [CommonModule],
  template: `
    <select *ngIf="options?.length">
      <ng-container>
        <option *ngFor="let option of options; trackBy: trackByFn" [attr.value]="getOptionValue(option)">
          {{ getOptionLabel(option) }}
        </option>
      </ng-container>
    </select>`,
})
export class SelectComponent implements OnInit {
  @Input() options!: OptionItem[];

  isStingSelect = false;

  ngOnInit(): void {
    // if (typeof this.options[0] === 'string') {
    //   this.isStingSelect = true;
    // }
  }

  getOptionLabel(option: OptionItem) {
    return typeof option === 'string' ? option : option.title;
  }

  getOptionValue(option: OptionItem) {
    return typeof option === 'string' ? option : option.value;
  }

  trackByFn = (index: number, option: OptionItem) => {
    this.getOptionValue(option);
  };
}
