import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { duplicateFolderName } from '../validators/duplicate-folder-name.validator';

@Component({
  selector: 'my-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  myForm!: FormGroup;
  isHierarchyVisible: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      folderHierarchy: this.formBuilder.array([]),
    });
    if (this.folderHierarchy.length === 0) this.isHierarchyVisible = false;
  }

  removeFolder(index: number): void {
    this.folderHierarchy.removeAt(index);
    if (this.folderHierarchy.length === 0) this.isHierarchyVisible = false;
  }

  addFolder(): void {
    this.folderHierarchy.push(
      this.formBuilder.group({
        name: [
          null,
          {
            validators: [
              Validators.required,
              duplicateFolderName(),
            ],
            updateOn: 'blur',
          },
        ],
        subFolders: this.formBuilder.array([]),
        level: 0,
      })
    );
    this.isHierarchyVisible = true;
  }

  getForm(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }

  get folderHierarchy(): FormArray {
    return this.myForm.get('folderHierarchy') as FormArray;
  }


}
