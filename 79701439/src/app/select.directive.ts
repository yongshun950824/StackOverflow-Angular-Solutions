import { AfterViewInit, Directive, Input, OnDestroy } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { Subscription } from 'rxjs';

@Directive({
  selector: 'mat-option[selectAll]',
})
export class SelectAllDirective implements AfterViewInit, OnDestroy {
  @Input() allValues: any[] = [];

  private subscriptions: Subscription[] = [];

  constructor(private matOption: MatOption, private matSelect: MatSelect) {}

  ngAfterViewInit(): void {
    const parentFormControl = this.matSelect.ngControl?.control;

    this.subscriptions.push(
      this.matOption.onSelectionChange.subscribe((event) => {
        if (event.isUserInput) {
          if (event.source.selected) {
            parentFormControl?.setValue(this.allValues);
            this.matOption.select();
          } else {
            parentFormControl?.setValue([]);
            this.matOption.deselect();
          }
        }
      })
    );

    // update select all individual option changes
    this.subscriptions.push(
      this.matSelect.optionSelectionChanges.subscribe((event) => {
        if (event.isUserInput && event.source.value !== this.matOption.value) {
          setTimeout(() => {
            const selected = parentFormControl?.value.filter(Boolean) || [];
            const allCount = this.allValues.length;

            if (selected.length === allCount) {
              if (!this.matOption.selected) {
                this.matOption.select();
              }
            } else {
              if (this.matOption.selected) {
                this.matOption.deselect();
              }
            }
          });
        }
      })
    );

    setTimeout(() => {
      if (parentFormControl?.value?.length === this.allValues.length) {
        this.matOption.select();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
