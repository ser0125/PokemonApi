import { OnInit, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PokeApiService } from 'src/app/services/pokeapi.service';

@Component({
    selector: 'pokemon-detail.component',
    templateUrl: './pokemon-detail.component.html',
    styleUrls: ['./pokemon-detail.component.scss']
  })

  export class PokemonDetailComponent implements OnInit {
    pokemonData: {};
    constructor(
      public dialogRef: MatDialogRef<PokemonDetailComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private pokeApiService: PokeApiService) {
      }

    ngOnInit(): void {
      this.pokeApiService.getPokemonById(this.data.pokemonId).subscribe(pokemonData => {
        console.log(pokemonData);
        this.pokemonData = pokemonData;
      })
    }
    
      onNoClick(): void {
        this.dialogRef.close();
      }
      getPercentage(statBase: number) {
        let width = statBase *100/255;
        return `${width}%`;
      }
  }