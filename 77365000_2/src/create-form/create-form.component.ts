import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class BirdCreateFormComponent {

  constructor(
    private formBuilder: FormBuilder
    ) { }

    birdCreateForm = this.formBuilder.group({
      name: ''
    });

    onSubmit(): void {
      console.warn('This is form value', this.birdCreateForm.value);
    }

}
