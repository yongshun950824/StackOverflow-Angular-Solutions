import {
  AsyncPipe,
  CommonModule,
  JsonPipe,
  NgTemplateOutlet,
} from '@angular/common';
import { Component, TemplateRef, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FieldType,
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core';
import {
  FormlyFieldProps,
  FormlyFormFieldModule,
} from '@ngx-formly/primeng/form-field';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
} from 'primeng/autocomplete';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';

interface AutocompleteProps extends FormlyFieldProps {
  results: unknown[];
  searchObject(event: { query: string }): void;
  itemTemplate: TemplateRef<any>;
}

export interface FormlyAutocompleteFieldConfig
  extends FormlyFieldConfig<AutocompleteProps> {
  type: 'autocomplete' | Type<FormlyFieldAutocomplete>;
}

@Component({
  selector: 'formly-field-primeng-autocomplete',
  standalone: true,
  imports: [
    FormlyFormFieldModule,
    FormlyModule,
    CommonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    FormlyPrimeNGModule,
    NgTemplateOutlet,
  ],

  template: `<p-autoComplete
    field="label"    
    [formControl]="formControl"
    [formlyAttributes]="field"
    [forceSelection]="true"
    [suggestions]="props.results"
    [style]="{ width: '100%' }"
    [inputStyle]="{ width: '100%' }"
    (completeMethod)="props.searchObject($event)">
      <ng-template pTemplate="item" let-feature>

        <ng-container *ngTemplateOutlet="props.itemTemplate; context: { $implicit: feature }">
        </ng-container>
      </ng-template>
  </p-autoComplete>
`,
})
export class FormlyFieldAutocomplete extends FieldType<
  FieldTypeConfig<AutocompleteProps>
> {}
