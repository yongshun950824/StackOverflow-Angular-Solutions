import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  template: `
  <form [formGroup]="formGroup">
    <div style="border: 1px solid blue; padding: 10px; width: 800px; margin: 5px; background: pink;">
      <p><strong>Category : {{index+1}}</strong></p>
      Category ID :
      <input type="text" formControlName="categoryID" />
      Category Name:
      <input type="text" formControlName="categoryName" />

      <button type="button" class="remove" (click)="removeCategory()">Remove Category</button>
    </div>
  </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
})
export class CategoryComponent {
  @Input() categories!: FormArray;
  @Input() formGroup!: FormGroup;
  @Input() index!: number;

  removeCategory() {
    this.categories.removeAt(this.index);
  }
}
