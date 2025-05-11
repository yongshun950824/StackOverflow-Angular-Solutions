import { Component, OnInit } from '@angular/core';
import { PokayokesService } from '../pokayokes.service';

@Component({
  selector: 'app-pokayoke',
  templateUrl: './pokayoke.component.html',
  styleUrls: ['./pokayoke.component.css']
})
export class PokayokeComponent implements OnInit {
  constructor(public pokayokeService: PokayokesService) {}

  ngOnInit(): void {
    this.pokayokeService.getPokayokes();
  }
}
