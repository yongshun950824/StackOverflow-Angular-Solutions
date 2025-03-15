import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: 'main.html',
})
export class App {
  name = 'Angular';

  recipeForm!: FormGroup;
  editMode = false;

  id = 1;

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray<any>([]);

    if (this.editMode) {
      // const recipe = this.recipeService.getRecipe(this.id);
      // Mock
      const recipe: any = {};
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (const ingredient of recipe['ingredients']) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      //name: new FormControl(recipeName, Validators.required),
      //imagePath: new FormControl(recipeImagePath, Validators.required),
      //description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients'))?.controls;
  }

  onAddIngredient() {
    let fg: FormGroup<any> = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
      ]),
    });

    (<FormArray>this.recipeForm.get('ingredients'))?.push(fg);
  }
}

bootstrapApplication(App);
