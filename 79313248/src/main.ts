import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  fruits: Array<{ value: number; label: string }>;
  fruitFormBootstrap: FormGroup;
  fruitFormMaterial: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fruits = [
      { value: 1, label: 'Watermelon' },
      { value: 2, label: 'Apple' },
      { value: 3, label: 'Banana' },
    ];

    this.fruitFormBootstrap = this.fb.group({
      fruit: new FormControl(),
    });

    this.fruitFormMaterial = this.fb.group({
      fruit: new FormControl(),
    });
  }

  // Patching a value in bootstrap automatically selects its corresponding label for display
  ngOnInit() {
    this.fruitFormBootstrap.patchValue({
      fruit: 2,
    });

    //angular material autocompelte patching only updates the controller without updating the display to show its corresponding label

    this.fruitFormMaterial.patchValue({
      fruit: 2,
    });

    const searchFruit = this.fruits.find((fruit) => fruit.value === 2);
    //although this works but it sets the entire object as form control value which is not what I want
    //this.fruitFormMaterial.patchValue({
    //  fruit: searchFruit,
    //});
  }

  //submitting a select in bootstrap set the form control with the value of the selected option
  submitBootstrapForm() {
    console.log(this.fruitFormBootstrap);
  }

  //Based on angular material documentation this is how to have a separate display value than the control
  /*
  displayFn = (value: string) => {
    if (Number.isNaN(value)) return value;
  
    return (
      this.fruits?.find((fruit) => fruit.value === Number(value))?.label ||
      value
    );
  };
  */

  displayFn(options: any[]): (value: any) => string {
    return (value: any) => {
      if (Number.isNaN(value)) return value;

      return (
        options.find((option) => option.value === Number(value))?.label || value
      );
    };
  }

  submitAngularMaterialForm() {
    console.log(this.fruitFormMaterial);
  }

  get fruitControl() {
    return this.fruitFormMaterial.controls['fruit'] as FormControl;
  }
}

bootstrapApplication(AppComponent, {
  providers: [provideAnimations()],
});
