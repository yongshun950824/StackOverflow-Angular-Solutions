import 'zone.js/dist/zone';
import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: 'main.html',
})
export class App {
  selectedCategoryList: String = '--Choose Category--';

  categoryList: Array<any> = [
    {
      name: 'Test One',
      subCategoryList: [
        {
          typeList: [''],
          name: 'Test 1',
        },
        {
          typeList: [''],
          name: 'Test 1.1',
        },
        {
          typeList: [''],
          name: 'Test 2.2',
        },
      ],
    },
    {
      name: 'Test Two',
      subCategoryList: [
        {
          typeList: [''],
          name: 'Test 2',
        },
        {
          typeList: [''],
          name: 'Test 2.1',
        },
        {
          typeList: [''],
          name: 'Test 2.2',
        },
      ],
    },
    {
      name: 'Test Three',
      subCategoryList: [
        {
          typeList: [''],
          name: 'Test 3',
        },
      ],
    },
  ];

  selectedCountry: String = '--Choose Document Category--';

  subCategoryList: Array<any> = [];
  typeList: Array<any> = [];

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  documentForm: FormGroup = this.fb.group({
    appCode: ['123'],
    accountType: [''],
    emailId: ['test@aol.com'],
    IDV: [''],
    envelopeRequest: this.fb.group({
      documents: this.fb.array([]),
    }),
  });

  ngOnInit() {
    // this.form = this.fb.group({
    //   documents: this.fb.array([]),
    // });

    this.initDocument();
  }

  changeCategoryList(category: any) {
    this.subCategoryList = this.categoryList.find(
      (cat: any) => cat.name == category.target.value
    ).subCategoryList;
  }

  changeSubCategoryList(subList: any) {
    this.typeList = this.categoryList
      .find((cat: any) => cat.name == this.selectedCountry)
      .subCategoryList.find(
        (stat: any) => stat.name == subList.target.value
      ).typeList;
  }

  initDocument() {
    this.documents.push(this.newDocument());
    let documentIndex = this.documents.length - 1;
    this.newDocumentFieldGroup(documentIndex);

    //console.log(this.documentFields(0).controls.length);
  }

  newDocument() {
    return this.fb.group({
      name: new FormControl(''),
      documentId: new FormControl(''),
      documentFields: this.fb.array([]),
    });
  }

  newDocumentFieldGroup(comIndex: number) {
    this.documentFields(comIndex).push(this.newDocumentFields());

    this.documentFields(comIndex).push(
      this.newDocumentFields('documentSubCategory')
    );
  }

  newDocumentFields(name = 'documentCategory') {
    return this.fb.group({
      name: new FormControl(name),
      value: new FormControl(
        name == 'documentCategory' ? '--Choose Document Category--' : ''
      ),
    });
  }

  get documents() {
    // Problem was from here, should use `documentForm` --> envelopeRequest --> documents
    return (this.documentForm.controls.envelopeRequest as FormGroup).controls
      .documents as FormArray;
  }

  documentFields(comIndex: number) {
    return this.documents.controls[`${comIndex}`].get(
      'documentFields'
    ) as FormArray;
  }

  documentFieldsIndexes(comIndex: number) {
    return Array(this.documentFields(comIndex).controls.length / 2)
      .fill(0)
      .map((x, i) => i * 2);
  }

  submit() {
    console.log(this.documentForm.value);
  }
}

bootstrapApplication(App);
