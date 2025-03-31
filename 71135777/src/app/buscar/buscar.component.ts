import { Component, OnInit } from '@angular/core';
import { Heroe } from '../interface/heroes.interface';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }

  selectedHero!: Heroe;

  heroes: Heroe[] = [];

  filteredHeros: Heroe[] = [];

  filterHeros(event: any) {
    let filtered: Heroe[] = [];
    let query = event.query;
    for (let i = 0; i < this.heroes.length; i++) {
      let heroe = this.heroes[i];
      if (heroe.superhero.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(heroe);
      }
    }
    this.filteredHeros = filtered;
    console.log(this.filteredHeros); // When I print this to the console I can see the
    // search results in the console, however I can't get them to show up in the autocomplete

    this.cambiar();
  }

  cambiar() {
    // let mostrar: any[] = [];
    // for (let i = 0; i < this.filteredHeros.length; i++) {
    //   mostrar[i] = this.filteredHeros[i].superhero;
    // }
    // return mostrar;

    return this.filteredHeros;
  }
}
