import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  /**
   * Handle form submission.
   *
   * @param {Event} event
   * @memberof LoginComponent
   */
  public onSubmit(event: Event): void {
    if (this.form.valid) {
      console.log('VALID', this.form.value);
    } else {
      console.log('INVALID', this.form.value);

      Object.keys(this.form.controls).forEach((controlName) => {
        console.log('SHOW_ERRORS', controlName);
        const control = this.form.get(controlName);

        // ISSUE: Nothing changes on the element still 
        // ng-untouched, and was expecting it to be 
        // ng-touched
        control.markAllAsTouched();
      });
    }
  }

  public ngOnInit() {
    this.form = this.formBuilder.group({
      login: []
    });
  }
}
