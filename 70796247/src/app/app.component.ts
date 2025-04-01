import { Component, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', [Validators.required, Validators.maxLength(255)]],
    resources: this.formBuilder.array([]),
  });

  ngOnInit() {
    let resource = this.newResource();
    resource.patchValue({ title: 'A', description: 'B' });
    this.resources.push(resource);
  }

  get resources(): FormArray {
    return this.form.get('resources') as FormArray;
  }

  private newResource(): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(255)]],
      contentTypeId: ['', Validators.required],
      url: ['', Validators.required],
    });
  }

  addResource(): void {
    this.resources.push(this.newResource());
  }
}
