import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './main.html',
})
export class App {
  faPlus = faPlus;
  faMinus = faMinus;

  constructor(private fb: FormBuilder) {}

  resp = {
    appCode: '',
    accountType: '',
    emailId: '',
    IDV: '',
    emailSubject: null,
    emailBlurb: null,
    envelopeRequest: {
      compositeTemplates: [
        {
          compositeTemplateId: 13,
          serverTemplates: [
            {
              sequence: 93,
              templateId: '',
            },
          ],
          inlineTemplates: [
            {
              sequence: 10,
              recipients: {
                signers: [
                  {
                    name: null,
                    email: '',
                    recipientId: 41,
                  },
                ],
                carbonCopies: [],
                customFields: {
                  listCustomFields: [],
                  textCustomFields: [],
                },
              },
            },
          ],
        },
      ],
    },
  };

  templateForm = this.fb.group({
    appCode: ['esg'],
    accountType: [''],
    emailId: [''],
    IDV: [''],
    emailSubject: [null, Validators.required],
    emailBlurb: [null, Validators.required],
    envelopeRequest: this.fb.group({
      compositeTemplates: this.fb.array([this.newCompositeTemplate()]),
    }),
  });

  randomNumber(max: number) {
    return Math.floor(Math.random() * max) + 1;
  }

  compositeTemplates(): FormArray {
    return this.templateForm.get(
      'envelopeRequest.compositeTemplates'
    ) as FormArray;
  }

  newCompositeTemplate(): FormGroup {
    return this.fb.group({
      compositeTemplateId: this.randomNumber(100),
      serverTemplates: this.fb.array([this.newTemplate()]),
      inlineTemplates: this.fb.array([this.newSequence()]),
    });
  }

  addCompositeTemplate() {
    this.compositeTemplates().push(this.newCompositeTemplate());
  }

  removeCompositeTemplate(comIndex: number) {
    this.compositeTemplates().removeAt(comIndex);
  }

  serverTemplates(comIndex: number): FormArray {
    return this.compositeTemplates()
      .at(comIndex)
      .get('serverTemplates') as FormArray;
  }

  inlineTemplates(comIndex: number): FormArray {
    return this.compositeTemplates()
      .at(comIndex)
      .get('inlineTemplates') as FormArray;
  }

  signers(comIndex: number, skillIndex: number): FormArray {
    return this.compositeTemplates()
      .at(comIndex)
      .get(`inlineTemplates.${skillIndex}.recipients.signers`) as FormArray;
  }

  addSigner(k: number, s: number) {
    this.signers(k, s).push(this.envelopeSigners());
  }

  removeSigner(k: number, s: number, i: number) {
    this.signers(k, s).removeAt(i);
  }

  newTemplate(): FormGroup {
    return this.fb.group({
      sequence: this.randomNumber(100),
      templateId: '',
    });
  }

  newSequence(): FormGroup {
    return this.fb.group({
      sequence: this.randomNumber(10),
      recipients: this.fb.group({
        signers: this.fb.array([this.envelopeSigners()]),
        carbonCopies: this.fb.array([
          // this.envelopeCarbonCopies()
        ]),
        customFields: this.fb.group({
          listCustomFields: this.fb.array([]),
          textCustomFields: this.fb.array([]),
        }),
      }),
    });
  }

  addServerTemplate(serverIndex: number) {
    this.serverTemplates(serverIndex).push(this.newTemplate());
  }

  removeServerTemplate(serverIndex: number, skillIndex: number) {
    this.serverTemplates(serverIndex).removeAt(skillIndex);
  }

  envelopeSigners(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      recipientId: this.randomNumber(50),
    });
  }

  submit() {
    console.log(this.templateForm.value);
  }
}

bootstrapApplication(App);
