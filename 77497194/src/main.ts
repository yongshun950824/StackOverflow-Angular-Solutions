import 'zone.js';
import { Component, ElementRef, ViewChild } from '@angular/core';
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
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { TemplateService } from './services/template.service';
import { Template } from './models/template';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { delay } from 'rxjs';
import { TemplateInfo } from './models/template-info';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
  ],
  providers: [TemplateService],
  templateUrl: `main.html`,
})
export class App {
  name = 'Angular';
  @ViewChild('templates')
  templates!: ElementRef;
  optionChoice: any = '';
  templateData: any = '';
  tempData: any;
  tempId: string[] = [];
  tempInfo: TemplateInfo;

  constructor(
    private fb: FormBuilder,
    private templateservice: TemplateService
  ) {}
  envelopeRequest = this.fb.group({
    name: '',
    email: '',
    optionRequest: null,
    newRequest: this.fb.group({
      customFields: this.fb.group({
        listFields: this.fb.array([]),
        textFields: this.fb.array([]),
      }),
    }),
  });

  getTemplates() {
    this.templateservice.getTemplateOptions().subscribe((temp: Template) => {
      if (temp) {
        this.templateData = temp;
        this.templateData?.envelopeTemplates.forEach((temp) => {
          this.tempData?.push(temp.name);
          this.tempId?.push(temp.templateId);
        });
      }
    });
  }

  onChange() {
    this.optionChoice = this.envelopeRequest.get('optionRequest')?.value;
    console.log(this.optionChoice);

    this.templateservice
      .getTemplateInfo(this.optionChoice)
      .pipe(delay(500))
      .subscribe((res: TemplateInfo) => {
        this.tempInfo = res;

        // this.envelopeRequest.patchValue({
        //   newRequest: {
        //     customFields: {
        //       textFields: [
        //         {
        //           name: res.name,
        //           value: '',
        //         },
        //       ],
        //       listFields: [
        //         {
        //           name: res.name,
        //           value: '',
        //         },
        //       ],
        //     },
        //   },
        // });

        // Clear items in FormArray(s)
        this.customNameFormArr.clear();
        this.customTextFormArr.clear();

        const infoTemp = this.tempInfo?.customFields?.textCustomFields;
        infoTemp.forEach((res) => {
          this.customNameFormArr.push(
            this.fb.group({
              name: res.name,
              value: res.value,
            })
          );
        });

        const infoText = this.tempInfo?.customFields?.listCustomFields;
        infoText.forEach((res) => {
          this.customTextFormArr.push(
            this.fb.group({
              name: res.name,
              value: res.value,
            })
          );
        });
      });
  }

  get customNameFormArr(): FormArray {
    return this.envelopeRequest?.get(
      'newRequest.customFields.textFields'
    ) as FormArray;
  }

  get customTextFormArr(): FormArray {
    return this.envelopeRequest?.get(
      'newRequest.customFields.listFields'
    ) as FormArray;
  }

  ngOnInit(): void {
    this.getTemplates();
  }
}

bootstrapApplication(App);
