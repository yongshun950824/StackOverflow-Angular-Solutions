export abstract class FiguraGeometrica {
  nombre: string = '';

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  abstract calcularPerimetro(): number;
}

export class Circulo extends FiguraGeometrica {
  radio: number = 0;

  constructor(nombre: string, radio: number) {
    super(nombre);
    this.radio = radio;
  }
  override calcularPerimetro(): number {
    return this.radio * 2 * 3.1416;
  }
}

export class TrianguloEscaleno extends FiguraGeometrica {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;

  constructor(nombre: string, ladoA: number, ladoB: number, ladoC: number) {
    super(nombre);
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }
  override calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}

export class TrianguloEquilatero extends TrianguloEscaleno {
  constructor(nombre: string, ladoA: number, ladoB: number, ladoC: number) {
    super(nombre, ladoA, ladoB, ladoC);
  }
}
