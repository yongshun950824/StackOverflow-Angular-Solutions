import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  signal,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
} from 'primeng/autocomplete';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdresseService } from '../services/adresse.service';
import { CardModule } from 'primeng/card';
import {
  FormlyFieldConfig,
  FormlyFormOptions,
  FormlyModule,
} from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    CardModule,
    FormlyModule,
    FormlyPrimeNGModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  selectedCodePostalCommune: any | undefined;
  selectedCodePostalCommuneLabel: string | undefined;
  suggestionsCodePostalCommune: any[] = [];

  form: FormGroup = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  destroyRef = inject(DestroyRef);

  formlyJson: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'flex',
      fieldGroup: [
        {
          key: 'codepostalOuCommune',
          type: 'autocomplete',
          props: { required: false },
        },
      ],
    },
  ];

  @ViewChild('featureItemTemplate', { static: true })
  featureItemTemplate!: TemplateRef<any>;

  constructor(private adresseService: AdresseService) {
    //this.fields = this.mapFields(this.formlyJson);
  }

  ngAfterViewInit() {
    this.fields = this.mapFields(this.formlyJson);
  }

  mapFields(fields: FormlyFieldConfig[]) {
    return fields.map((f) => {
      if (f.key?.toString().includes('codepostalOuCommune')) {
        if (f.props) {
          f.props['searchObject'] = (event: AutoCompleteCompleteEvent) =>
            this.searchCodePostalCommune(event);
          f.props['results'] = this.suggestionsCodePostalCommune;
          f.props['itemTemplate'] = this.featureItemTemplate;
        }
      }

      if (f.fieldGroup && f.fieldGroup.length > 0) {
        this.mapFields(f.fieldGroup);
      }

      return f;
    });
  }

  searchCodePostalCommune(event: AutoCompleteCompleteEvent) {
    this.adresseService
      .searchCodePostalCommune(event.query)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((s) => {
        let codepostalOuCommune = this.fields[0].fieldGroup!.find((x) =>
          x.key?.toString().includes('codepostalOuCommune')
        );
        if (codepostalOuCommune && codepostalOuCommune?.props)
          codepostalOuCommune.props['results'] = s.features;

        this.suggestionsCodePostalCommune = s.features;
      });
  }

  onSelectedCodePostalCommune(event: any) {
    this.selectedCodePostalCommune = event.value.properties;
    this.selectedCodePostalCommuneLabel =
      event.value.properties.postcode + ' - ' + event.value.properties.label;
  }

  onUnselectedCodePostalCommune(event: any) {
    this.selectedCodePostalCommune = undefined;
    this.selectedCodePostalCommuneLabel = undefined;
  }
}
