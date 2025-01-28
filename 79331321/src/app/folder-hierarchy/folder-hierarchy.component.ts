import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { duplicateFolderName } from '../validators/duplicate-folder-name.validator';

@Component({
  selector: 'folder-hierarchy',
  templateUrl: './folder-hierarchy.component.html',
  styleUrls: ['./folder-hierarchy.component.css'],
})
export class FolderHierarchyComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  @Output() remove = new EventEmitter();
  @Input() folder!: FormGroup;
  @Input() index!: number;
  @Input() parentDirectory?: FormGroup;

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(
      'parentDirectory com',
      JSON.stringify(this.parentDirectory?.value, null, 2)
    );
  }

  addSubFolder(folder: FormGroup): void {
    (folder.get('subFolders') as FormArray).push(
      this.formBuilder.group({
        name: [
          null,
          {
            validators: [
              Validators.required,
              duplicateFolderName(this.parentDirectory),
            ],
            updateOn: 'blur',
          },
        ],
        subFolders: this.formBuilder.array([]),
        level: folder.value.level + 1,
      })
    );
  }

  getControls(folder: FormGroup): FormArray {
    return folder.get('subFolders') as FormArray;
  }

  getSubFoldersControls(folder: FormGroup): FormGroup[] {
    return (folder.get('subFolders') as FormArray).controls as FormGroup[];
  }

  removeSubFolder(folder: FormGroup, index: number): void {
    (folder.get('subFolders') as FormArray).removeAt(index);
  }

  removeFolder(folder: { value: { subFolders: string | any[] } }): void {
    this.remove.emit(folder);
  }

  disableAdd(folder: { invalid: any }): void {
    return this.folder.invalid || folder.invalid;
  }

  get nameControl() {
    return this.folder.get('name') as FormControl;
  }

  getSubFolderParent(formGroup: FormGroup) {
    return formGroup.parent[0] as FormGroup;
  }
}
