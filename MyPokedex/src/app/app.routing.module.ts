import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './components/pokemon/pokemon-list/pokemon-list.component';
import { P404Component } from './components/error/p404/p404.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Página principal'
    }
},
  {
    path: 'pokemon-list',
    component: PokemonListComponent,
    data: {
      title: 'Lista Pokemon'
    }
  },
  { path: '**', component: P404Component }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
  