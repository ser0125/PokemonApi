import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokemonListComponent } from './pokemon-list.component';
import { MatCardModule, MatDialog, MatDialogModule } from '@angular/material';
import { PokeApiService } from 'src/app/services/pokeapi.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListComponent ],
      imports: [InfiniteScrollModule, MatCardModule, HttpClientTestingModule, 
        MatDialogModule],
      providers: [PokeApiService, MatDialog]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
