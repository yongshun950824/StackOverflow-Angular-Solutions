import { JsonPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-root',
  template: `
  <form [formGroup]="categoryForm" (ngSubmit)="onSubmit()">
    <div formArrayName="categories" class="sections">
      <div *ngFor="let category of categories.controls; let i=index">

        <ng-container >
          <!-- CHILD COMPONENT -->
          <app-category [formGroup]="categoryFormGroup(i)" [categories]="categories"  [index]="i"></app-category>

          <!-- ARRAY INPUTS -->
          <!-- <div style="border: 1px solid blue; padding: 10px; width: 800px; margin: 5px; background: pink;">
            <p><strong>Category : {{i+1}}</strong></p>
            Category ID :
            <input type="text" formControlName="categoryID" />
            Category Name:
            <input type="text" formControlName="categoryName" />

            <button type="button" class="remove" (click)="removeCategory(i)">Remove Category</button>
          </div> -->
        </ng-container>
      </div>
    </div>
    <button class="btn" type="button" (click)="addCategory()">Add Category</button>
    <button class="btn" type="submit">Submit</button>
  </form>

{{this.categoryForm.value | json}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgFor, CategoryComponent],
})
export class App {
  categoryForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      categories: this.fb.array([]),
    });
  }

  get categories(): FormArray {
    return this.categoryForm.get('categories') as FormArray;
  }

  addCategory() {
    this.categories.push(
      this.fb.group({
        categoryID: '',
        categoryName: '',
        sections: this.fb.array([]),
      })
    );
  }

  removeCategory(catIndex: number) {
    this.categories.removeAt(catIndex);
  }

  categoryFormGroup(i: number) {
    return this.categories.get(`${i}`) as FormGroup;
  }

  onSubmit() {
    console.log(this.categoryForm.value);
  }
}

bootstrapApplication(App);
