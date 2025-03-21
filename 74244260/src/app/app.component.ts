import { Component, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuForm!: FormGroup;

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.menuForm = this.builder.group({
      name: this.builder.control<string>('', Validators.required),
      price: this.builder.control<string>('', Validators.required),
      description: this.builder.control<string>('', Validators.required),
      itemType: this.builder.control<string>('', Validators.required),
      image: this.builder.control<NonNullable<any>>('', Validators.required),
      imageName: this.builder.control<string>('', Validators.required),
      categories: this.builder.array([]),
      relatedsides: this.builder.array([]),
      addons: this.builder.array([]),
    });
  }

  addAddon() {
    const addOnForm = this.builder.group({
      addonname: ['', Validators.required],
      addonoptions: this.builder.array([]),
    });

    this.addons.push(addOnForm);
  }

  addAddonOption(i: number) {
    const addOnOptionForm = this.builder.group({
      option: this.builder.control<string>(''),
    });

    this.addonoptions(i).push(addOnOptionForm);

    console.log('addons with options', this.addons.value);
  }

  deleteAddOn(i: number) {}

  get addons(): FormArray {
    return this.menuForm.controls.addons as FormArray;
  }

  addonoptions(addonFormIndex: number): FormArray {
    return (this.addons.get(`${addonFormIndex}`) as FormGroup).controls
      .addonoptions as FormArray;
  }
}
