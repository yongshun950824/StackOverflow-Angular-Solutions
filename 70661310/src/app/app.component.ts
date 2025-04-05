import { Component, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  form: FormGroup;
  inp = '';
  selectedDescendants = [];
  subCategoriesParams$: BehaviorSubject<any> = new BehaviorSubject({
    params: [{ paramsName: 'A' }, { paramsName: 'B' }, { paramsName: 'C' }],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  public get data() {
    return this.form.get('data') as FormArray;
  }

  initializeForm(): void {
    this.form = this.fb.group({
      data: this.fb.array([
        this.fb.group({
          params: [this.inp, Validators.required],
          category: [this.selectedDescendants, Validators.required],
          value: ['', Validators.required],
        }),
      ]),
    });

    this.subCategoriesParams$.forEach((value) => {
      for (let param of value.params) {
        this.data.push(
          this.fb.group({
            params: [this.inp, Validators.required],
            category: [this.selectedDescendants, Validators.required],
            value: ['', Validators.required],
          })
        );
      }
    });
  }

  loadParams() {
    // this.subCategoriesParams$ =
    //       this.categoryService.findOne(this.selectedDescendants);
  }

  onChangeEvent(params: any) {}

  save() {}
}
