import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatDialogModule} from '@angular/material';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonListComponent } from './components/pokemon/pokemon-list/pokemon-list.component';
import { P404Component } from './components/error/p404/p404.component';
import { AppRoutingModule } from './app.routing.module';
import { PokeApiService } from './services/pokeapi.service';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokemonDetailComponent } from './components/pokemon/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    P404Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    MatDialogModule
  ],
  providers: [PokeApiService],
  entryComponents: [PokemonDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
