import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  field_name = new FormControl(); // FormControl I want to add
  form: FormGroup; // this is the FormGroup where all the other fields live
  isLoading: boolean;
  filteredOptions: Observable<any[]> = of([
    { field_name: 'Field 1' },
    { field_name: 'Field 2' },
  ]);
  isFieldChannelMatch: boolean;
  saveButtonText = 'Save';

  ngOnInit() {
    this.initializeFormAndItsFields();
  }

  initializeFormAndItsFields() {
    this.form = new FormGroup({
      field_name: new FormControl(null, {
        // fix: unclear how to move this here
        validators: [Validators.required],
      }),
      field_value: new FormControl(null, {
        validators: [Validators.required],
      }),
      description: new FormControl(null, {
        validators: [Validators.required],
      }),
      group_name: new FormControl(null, {
        validators: [Validators.required],
      }),
      group_value: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
  }

  onSaveChannelFields() {
    console.log('emitting data');
    const formData = {
      //field_name: this.field_name.value.field_name, //fix:  this works but i dont like the way its working right now.
      field_name: this.form.value.field_name, //fix: does not work
      field_value: this.form.value.field_value,
      description: this.form.value.description,
      group_name: this.form.value.group_name,
      group_value: this.form.value.group,
    };
    console.log('formData', formData);
    // this.onSubmitReason.emit(formData);
    // this.form.reset();
  }

  displayFn(obj: any): string {
    return obj?.field_name;
  }
}
