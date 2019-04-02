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
    machineMovement= [];
    eggMovement= [];
    levelUpMovement= [];
    tutorMovement= [];

    constructor(
      public dialogRef: MatDialogRef<PokemonDetailComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private pokeApiService: PokeApiService) {
      }

    ngOnInit(): void {
      this.pokeApiService.getPokemonById(this.data.pokemonId).subscribe((pokemonData:any) => {
        this.pokemonData = pokemonData;
        this.sortMovement(pokemonData.moves);
      })
    }
    
      onNoClick(): void {
        this.dialogRef.close();
      }
      getPercentage(statBase: number) {
        let width = statBase *100/255;
        return `${width}%`;
      }
      sortMovement(moves: []) {
        moves.forEach((move:any) => {
          switch(move.version_group_details[0].move_learn_method.name) {
            case 'machine':
            this.machineMovement.push(move);
            break;
            case 'egg':
            this.eggMovement.push(move);
            break;
            case 'tutor':
            this.tutorMovement.push(move);
            break;
            case 'level-up':
            this.levelUpMovement.push(move);
            break;
          }
        })
        this.levelUpMovement.sort((a,b) => {
          return a.version_group_details[0].level_learned_at - b.version_group_details[0].level_learned_at;
        });
      }
  }