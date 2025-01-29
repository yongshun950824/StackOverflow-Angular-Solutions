import { Component, Inject, OnInit } from '@angular/core';
import { Circulo } from '../modelo/figura-geometrica';
import { IonInput, IonItem, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonList],
  providers: [
    { provide: 'nombre', useValue: 'test' },
    { provide: 'radio', useValue: 1 },
  ],
})
export class CirculoComponent extends Circulo implements OnInit {
  override radio: number = 0;

  constructor(
    @Inject('nombre') nombre: string,
    @Inject('radio') radio: number
  ) {
    super(nombre, radio);
    this.radio = radio;
  }

  ngOnInit() {}

  override calcularPerimetro(): number {
    return this.radio * 2 * 3.1416;
  }
}
