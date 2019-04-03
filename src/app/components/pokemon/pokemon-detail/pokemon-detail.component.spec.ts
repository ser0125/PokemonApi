import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PokeApiService } from 'src/app/services/pokeapi.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { PokemonDetailComponent } from './pokemon-detail.component';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;
  const model = {
    name:'bulbasaur'
};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailComponent ],
      imports: [HttpClientTestingModule, MatDialogModule],
      providers: [PokeApiService,
    { provide: MatDialogRef, useValue: {} },
	{ provide: MAT_DIALOG_DATA, useValue: [] }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return data from a pokemon by Id', () => {
    component.data.pokemonId= 5;
    component.ngOnInit();
    console.log(component.pokemonData);
    
  });
});
