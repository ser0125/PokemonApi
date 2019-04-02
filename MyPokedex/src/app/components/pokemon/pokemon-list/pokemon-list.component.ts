import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/pokeapi.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons= [];
  offset = 0;
  disableScroll = false;

  constructor(private pokeapiservice: PokeApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getPokemons();
  }
// Call service to get all pokemons
  getPokemons() {
    this.pokeapiservice.getPokemons(this.offset).subscribe((data:any) => {
      this.pokemons = this.pokemons.concat(data.results);
    });
  }
  
  // When scroll down the screen  
  onScroll()  
  { 
    if(this.offset<860){
    this.offset = this.offset + 20; 
    this.getPokemons();  
    }
    else {
      this.disableScroll = true;
    }
  }  
  searchId(pokemon: string) {
    return pokemon.slice(34,-1);
  }

  getPokemonDetail(pokemonUrl:string) {
    this.openDialog(pokemonUrl);
  }

  
  openDialog(pokemonUrl: string): any {
    let pokemonId: string = this.searchId(pokemonUrl);
    this.dialog.open(PokemonDetailComponent, {
      width:'500px',
      data: {
        pokemonId
      }
    });
  }

}
