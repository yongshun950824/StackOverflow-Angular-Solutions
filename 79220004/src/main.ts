import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  provideIonicAngular,
  IonBackButton,
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import 'zone.js';

@Component({
  selector: 'app-root',
  templateUrl: `main.html`,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IonicModule,
    //ActivatedRoute
    //RouterLink,
  ],
  standalone: true,
})
export class App {
  name = 'Angular';

  cruceroId: string = '';
  crucero: any = {};
  editForm: FormGroup;

  constructor(
    //private activatedRoute: ActivatedRoute,
    //private crucerosService: CrucerosService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      name: [''],
      subtitle: [''],
      imagenCrucero: [''],
      descripcion: [''],
      imagenDescripcion: [''],
      tituloQueHacer: this.fb.array([]),
      imagenQueHacer: this.fb.array([]),
      descripcionQueHacer: this.fb.array([]),
      tituloCamarotes: this.fb.array([]),
      descripcionCamarotes: this.fb.array([]),
      imagenCamarotes: this.fb.array([]),
      planos: this.fb.array([]),
      lugares: this.fb.array([]),
      precioLugares: this.fb.array([]),
      puertos: this.fb.array([]),
    });
  }

  ngOnInit() {
    //this.cruceroId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.cruceroId = `1`;
    this.loadCrucero();
  }

  addTituloQueHacerButton() {
    // Start of Solution 1
    /*
    (this.editForm.get('tituloQueHacer') as FormArray).push(
      this.fb.group({
        descripcion: [''],
      })
    );
    */
    // End of Solution 1

    // Start of Solution 2
    (this.editForm.get('tituloQueHacer') as FormArray).push(
      this.fb.control('')
    );
    // End of Solution 2
  }

  getTituloQueHacerControls() {
    return (this.editForm.get('tituloQueHacer') as FormArray).controls;
  }

  addImagenQueHacerButton() {
    (this.editForm.get('imagenQueHacer') as FormArray).push(
      this.fb.group({
        descripcion: [''],
      })
    );
  }

  getImagenQueHacerControls() {
    return (this.editForm.get('imagenQueHacer') as FormArray).controls;
  }

  addDescripcionQueHacerButton() {
    (this.editForm.get('descripcionQueHacer') as FormArray).push(
      this.fb.group({
        descripcion: [''],
      })
    );
  }

  getDescripcionQueHacerControls() {
    return (this.editForm.get('descripcionQueHacer') as FormArray).controls;
  }

  addTituloCamarotesButton() {
    (this.editForm.get('tituloCamarotes') as FormArray).push(
      this.fb.group({
        descripcion: [''],
      })
    );
  }

  getTituloCamarotesControls() {
    return (this.editForm.get('tituloCamarotes') as FormArray).controls;
  }
  addDescripcionCamarotesButton() {
    (this.editForm.get('descripcionCamarotes') as FormArray).push(
      this.fb.group({
        descripcion: [''],
      })
    );
  }

  getDescripcionCamarotesControls() {
    return (this.editForm.get('descripcionCamarotes') as FormArray).controls;
  }
  addImagenCamarotesButton() {
    (this.editForm.get('imagenCamarotes') as FormArray).push(
      this.fb.group({
        descripcion: [''],
      })
    );
  }

  getImagenCamarotesControls() {
    return (this.editForm.get('imagenCamarotes') as FormArray).controls;
  }
  addPlanosButton() {
    (this.editForm.get('planos') as FormArray).push(
      this.fb.group({
        descripcion: [''],
      })
    );
  }

  getPlanosControls() {
    return (this.editForm.get('planos') as FormArray).controls;
  }
  addLugaresButton() {
    (this.editForm.get('lugares') as FormArray).push(
      this.fb.group({
        descripcion: [''],
      })
    );
  }

  getLugaresControls() {
    return (this.editForm.get('lugares') as FormArray).controls;
  }
  addPrecioLugaresButton() {
    (this.editForm.get('precioLugares') as FormArray).push(
      this.fb.group({
        descripcion: [''],
      })
    );
  }

  getPrecioLugaresControls() {
    return (this.editForm.get('precioLugares') as FormArray).controls;
  }
  addPuertosButton() {
    (this.editForm.get('puertos') as FormArray).push(
      this.fb.group({
        descripcion: [''],
      })
    );
  }

  getPuertosControls() {
    return (this.editForm.get('puertos') as FormArray).controls;
  }

  get tituloQueHacer(): FormArray {
    return this.editForm.get('tituloQueHacer') as FormArray;
  }

  addTituloQueHacer(descripcion: string) {
    // Start of Solution 1
    /*
    this.tituloQueHacer.push(
      this.fb.group({
        descripcion: [descripcion],
      })
    );
    */
    // End of Solution 1

    // Start of Solution 2
    this.tituloQueHacer.push(this.fb.control(descripcion));
    // End of Solution 2
  }

  get imagenQueHacer(): FormArray {
    return this.editForm.get('imagenQueHacer') as FormArray;
  }

  addImagenQueHacer(descripcion: string) {
    this.imagenQueHacer.push(
      this.fb.group({
        descripcion: [descripcion],
      })
    );
  }

  get descripcionQueHacer(): FormArray {
    return this.editForm.get('descripcionQueHacer') as FormArray;
  }

  addDescripcionQueHacer(descripcion: string) {
    this.descripcionQueHacer.push(
      this.fb.group({
        descripcion: [descripcion],
      })
    );
  }

  get tituloCamarotes(): FormArray {
    return this.editForm.get('tituloCamarotes') as FormArray;
  }

  addTituloCamarotes(descripcion: string) {
    this.tituloCamarotes.push(
      this.fb.group({
        descripcion: [descripcion],
      })
    );
  }

  get descripcionCamarotes(): FormArray {
    return this.editForm.get('descripcionCamarotes') as FormArray;
  }

  addDescripcionCamarotes(descripcion: string) {
    this.descripcionCamarotes.push(
      this.fb.group({
        descripcion: [descripcion],
      })
    );
  }

  get imagenCamarotes(): FormArray {
    return this.editForm.get('imagenCamarotes') as FormArray;
  }

  addImagenCamarotes(descripcion: string) {
    this.imagenCamarotes.push(
      this.fb.group({
        descripcion: [descripcion],
      })
    );
  }

  get planos(): FormArray {
    return this.editForm.get('planos') as FormArray;
  }

  addPlanos(descripcion: string) {
    this.planos.push(
      this.fb.group({
        descripcion: [descripcion],
      })
    );
  }

  get lugares(): FormArray {
    return this.editForm.get('lugares') as FormArray;
  }

  addLugares(descripcion: string) {
    this.lugares.push(
      this.fb.group({
        descripcion: [descripcion],
      })
    );
  }

  get precioLugares(): FormArray {
    return this.editForm.get('precioLugares') as FormArray;
  }

  addPrecioLugares(descripcion: string) {
    this.precioLugares.push(
      this.fb.group({
        descripcion: [descripcion],
      })
    );
  }

  get puertos(): FormArray {
    return this.editForm.get('puertos') as FormArray;
  }

  addPuertos(descripcion: string) {
    this.puertos.push(
      this.fb.group({
        descripcion: [descripcion],
      })
    );
  }

  async loadCrucero() {
    try {
      const cruceroData: any[] =
        //await this.crucerosService.obtenerCruceros();
        [
          {
            id: `1`,
            name: 'ABC',
            tituloQueHacer: ['Item 1', 'Item 2', 'Item 3'],
          },
        ];
      this.crucero = cruceroData.find((c) => c.id === this.cruceroId);
      if (this.crucero) {
        this.editForm.patchValue({
          name: this.crucero.name,
          subtitle: this.crucero.subtitle,
          imagenCrucero: this.crucero.imagenCrucero,
          descripcion: this.crucero.descripcion,
          imagenDescripcion: this.crucero.imagenDescripcion,
        });

        this.crucero.tituloQueHacer.forEach((titulo: string) => {
          this.addTituloQueHacer(titulo);
        });

        this.crucero.imagenQueHacer.forEach((imagen: string) => {
          this.addImagenQueHacer(imagen);
        });

        this.crucero.descripcionQueHacer.forEach((descripcion: string) => {
          this.addDescripcionQueHacer(descripcion);
        });

        this.crucero.tituloCamarotes.forEach((titulo: string) => {
          this.addTituloCamarotes(titulo);
        });

        this.crucero.descripcionCamarotes.forEach((descripcion: string) => {
          this.addDescripcionCamarotes(descripcion);
        });

        this.crucero.imagenCamarotes.forEach((imagen: string) => {
          this.addImagenCamarotes(imagen);
        });

        this.crucero.planos.forEach((planos: string) => {
          this.addPlanos(planos);
        });

        this.crucero.lugares.forEach((lugares: string) => {
          this.addLugares(lugares);
        });

        this.crucero.precioLugares.forEach((precioLugares: string) => {
          this.addPrecioLugares(precioLugares);
        });

        this.crucero.puertos.forEach((puertos: string) => {
          this.addPuertos(puertos);
        });
      }
    } catch (error) {
      console.error('Error loading crucero:', error);
    }
  }

  async saveChanges() {
    if (this.editForm.invalid) {
      console.log('Formulario inválido');
      return;
    }

    try {
      const formData = this.editForm.value;
      // Start of Solution 1
      // Transform objects to strings
      //formData.tituloQueHacer = formData.tituloQueHacer.map((x: any) => x.descripcion);
      // End of Solution 1
      console.log('form data', JSON.stringify(formData, null, 2));

      //await this.crucerosService.actualizarCrucero(this.cruceroId, formData);

      //this.router.navigate(['/gestor-cruceros']);
    } catch (error) {
      console.error('Error guardando cambios:', error);
    }
  }
}

bootstrapApplication(App, {
  providers: [
    //{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: 'ios' }),
    provideAnimations(),
  ],
});
