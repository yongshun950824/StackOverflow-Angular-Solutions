import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

export interface NormaPost {
  codSector: number;
  numNorma: number;
  denominacion: string;
  sumilla: string;
  contenido: string;
  tipoNormaId: number;
  fechaPublicacion: Date;
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';

  constructor(private fb: NonNullableFormBuilder) {}

  NormaForm!: FormGroup;

  get codSector() {
    return this.NormaForm.get('codSector');
  }
  get numNorma() {
    return this.NormaForm.get('numNorma');
  }
  get denominacion() {
    return this.NormaForm.get('denominacion');
  }
  get sumilla() {
    return this.NormaForm.get('sumilla');
  }
  get contenido() {
    return this.NormaForm.get('contenido');
  }
  get tipoNormaId() {
    return this.NormaForm.get('tipoNormaId');
  }
  get fechaPublicacion() {
    return this.NormaForm.get('fechaPublicacion');
  }

  ngOnInit() {
    this.NormaForm = this.fb.group({
      codSector: [0, { validators: [Validators.required] }],
      numNorma: [0, [Validators.required]],
      denominacion: ['', [Validators.required]],
      sumilla: ['', [Validators.required]],
      contenido: ['', [Validators.required]],
      tipoNormaId: [0, [Validators.required]],
      fechaPublicacion: [new Date(), [Validators.required]],
    });

    this.onSubmit_crear_norma();
  }

  onSubmit_crear_norma(): void {
    let post: NormaPost = this.NormaForm.value as NormaPost;
    console.log(post);
    //   this.normaService.postNorma(this.NormaForm.value as NormaPost).subscribe(resp=>{
    //     this.nueva_norma = resp;
    //     console.log(this.nueva_norma)
    //   }, err => {
    //     this.toastr.error("Error desconocido");
    // });
  }
}

bootstrapApplication(App);
