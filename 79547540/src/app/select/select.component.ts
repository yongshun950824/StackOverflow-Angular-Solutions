import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface Pokemon {
  value: string;
  viewValue: string;
  disabled?: boolean;
}

export interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() form: FormGroup;
  @Output() reset: EventEmitter<any> = new EventEmitter<any>();

  readonlyState: boolean = false;
  disableControl: boolean = false;

  floatLabel= 'auto';
  matcher = new MyErrorStateMatcher();

  pokemonGroups: PokemonGroup[] = [
    {
      name: 'Grass',
      pokemon: [
        {value: 'bulbasaur-0', viewValue: 'Bulbasaur'},
        {value: 'oddish-1', viewValue: 'Oddish'},
        {value: 'bellsprout-2', viewValue: 'Bellsprout'}
      ]
    },
    {
      name: 'Water',
      pokemon: [
        {value: 'squirtle-3', viewValue: 'Squirtle', disabled: true},
        {value: 'psyduck-4', viewValue: 'Psyduck'},
        {value: 'horsea-5', viewValue: 'Horsea'}
      ]
    },
    {
      name: 'Fire',
      disabled: true,
      pokemon: [
        {value: 'charmander-6', viewValue: 'Charmander'},
        {value: 'vulpix-7', viewValue: 'Vulpix'},
        {value: 'flareon-8', viewValue: 'Flareon'}
      ]
    },
    {
      name: 'Psychic',
      pokemon: [
        {value: 'mew-9', viewValue: 'Mew'},
        {value: 'mewtwo-10', viewValue: 'Mewtwo'},
      ]
    }
  ];

  get control() {
    return this.form.get('select');
  }

  get controlValue() {
    return this.form.value.select;
  }

  get controlLength() {
    return this.control.value.length;
  }

  get hasError() {
    return this.control.hasError('required');
  }

  get errorMessage() {
    return this.control.hasError('required') ? 'You must enter a value' : '';
  }

  constructor() { }

  ngOnInit() {
    this.control.patchValue('toto');
  }

  changeReadonlyState() {
    this.readonlyState = !this.readonlyState;
  }
  disable() {
    this.disableControl = ! this.disableControl;
  }

  resetControl() {
    this.reset.emit('select');
  }

  openedChange() {
    console.log('Select tag toggled!')
  }

  selectionChange(selection) {
    console.log('New selection :', selection.value)
  }

}