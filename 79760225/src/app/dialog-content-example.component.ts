import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content-example',
  templateUrl: './dialog-content-example.component.html',
  styleUrls: ['./dialog-content-example.component.scss'],
})
export class DialogContentExampleComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: { message: string },
    public dialogRef: MatDialogRef<DialogContentExampleComponent>
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      country: [''],
    });
  }

  submit(form: NgForm) {
    this.dialogRef.close({
      clicked: 'submit',
      form: form,
    });
  }
}
