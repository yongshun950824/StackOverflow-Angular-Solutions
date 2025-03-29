import { Component, VERSION } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  form!: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [0],
      Status: ['', Validators.required],
      array: this.formBuilder.array([this.createList()]),
    });

    this.array.controls.forEach((g: FormGroup) => {
      this.subscriptions.push(
        g
          .get('QtyDelivered')
          .valueChanges.pipe(debounceTime(500))
          .subscribe((x) => {
            console.log(1);
            g.get('QtyReceived').patchValue(this.Calculate(g));
          })
      );

      this.subscriptions.push(
        g
          .get('QtyRejected')
          .valueChanges.pipe(debounceTime(500))
          .subscribe((x) => {
            g.get('QtyReceived').patchValue(this.Calculate(g));
          })
      );
    });
  }

  createList(): FormGroup {
    return this.formBuilder.group({
      id: [0],
      QtyOrder: ['0', Validators.required],
      QtyDelivered: [''],
      QtyRejected: ['', Validators.required],
      QtyReceived: ['', Validators.required],
    });
  }

  get array(): FormArray {
    return this.form.get('array') as FormArray;
  }

  Calculate(formGroup: FormGroup) {
    return (
      formGroup.get('QtyDelivered').value - formGroup.get('QtyRejected').value
    );
  }

  add() {
    this.array.push(this.createList());
  }

  ngOnDestroy() {
    this.subscriptions.forEach((x) => {
      x.unsubscribe();
    });
  }
}
