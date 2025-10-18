import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { duplicateFolderName } from '../validators/duplicate-folder-name.validator';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'my-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  myForm!: FormGroup;
  isHierarchyVisible: boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      folderHierarchy: this.formBuilder.array([]),
    });
    if (this.folderHierarchy.length === 0) this.isHierarchyVisible = false;

    this.myForm.get('folderHierarchy').valueChanges.subscribe((x) => {
      this.setupGlobalExclusiveLogic();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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
            validators: [Validators.required, duplicateFolderName()],
            updateOn: 'blur',
          },
        ],
        isExclusive: false,
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

  findControlsByName(
    control: AbstractControl,
    targetName: string,
    collectedControls: AbstractControl[] = []
  ): AbstractControl[] {
    if (control instanceof FormGroup || control instanceof FormArray) {
      const controls =
        (control as FormGroup).controls || (control as FormArray).controls;

      Object.keys(controls).forEach((key) => {
        const childControl = controls[key];

        if (key === targetName && childControl instanceof FormControl) {
          collectedControls.push(childControl);
        }

        // Recurse deeper
        this.findControlsByName(childControl, targetName, collectedControls);
      });
    }

    return collectedControls;
  }

  setupGlobalExclusiveLogic(): void {
    const targetName = 'isExclusive';

    // Flatten the form for all 'isExclusive' controls
    const exclusiveControls = this.findControlsByName(this.myForm, targetName);

    exclusiveControls.forEach((triggerControl) => {
      triggerControl.valueChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe((isExclusiveValue: boolean) => {
          const shouldDisable = isExclusiveValue === true;

          for (let controlToToggle of exclusiveControls) {
            // Exclude disable the current triggered control
            if (controlToToggle === triggerControl) {
              continue;
            }

            shouldDisable
              ? controlToToggle.disable({ emitEvent: false })
              : controlToToggle.enable({ emitEvent: false });
          }
        });
    });
  }
}
