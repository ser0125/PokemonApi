import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PokeApiService {
    private baseURL: string = "http://pokeapi.co/api/v2";
    constructor (private http: HttpClient) {
    }

    getPokemons(offset: number) {
       return this.http.get(`${this.baseURL}/pokemon?offset=${offset}`);
    }
    getPokemonById(id: number) {
        return this.http.get(`${this.baseURL}/pokemon/${id}`);
     }
     getPokemonEffectiveness(type: number) {
      return this.http.get(`${this.baseURL}/pokemon/${type}`);
   }
}