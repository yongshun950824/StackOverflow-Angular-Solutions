import { Component, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private fb: FormBuilder) {
    this.addComponent('component_0_name');
    this.addComponent('component_1_name');
    this.addComponent('component_2_name');
  }

  componentForm = this.fb.group({
    name: ['root_test_name', Validators.required],
    definition: this.fb.group({
      name: ['definition_test_name'],
      components: this.fb.array([]),
    }),
  });

  components(): FormArray {
    return this.componentForm.get('definition').get('components') as FormArray;
  }

  componentInfo(componentIndex: number): FormGroup {
    return this.components().at(componentIndex) as FormGroup;
  }

  addComponent(name: string) {
    let component = this.fb.group({
      name: [name],
      info: this.fb.group({
        name: ['info_' + name],
      }),
    });

    this.components().push(component);
  }
}
