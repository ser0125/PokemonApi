import { OnInit, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
    title: string;
    message: string;
    btnSecond: boolean;
    btnSecondText: string;
    btnFirstText: string;
  }

@Component({
    selector: 'pokemon-detail.component',
    templateUrl: 'pokemon-detail.component.html'
  })

  export class PokemonDetailComponent implements OnInit {

    ngOnInit(): void {
    }

    constructor(
        public dialogRef: MatDialogRef<PokemonDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        }
    
      onNoClick(): void {
        this.dialogRef.close();
      }
  }