import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: [];

  constructor(private pokeapiservice: PokeApiService) { }

  ngOnInit() {
    this.pokeapiservice.getPokemons().subscribe((data:any) => {
      this.pokemons = data.results;
    })
  }

}
