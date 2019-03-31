import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PokeApiService {
    private baseURL: string = "http://pokeapi.co/api/v2";
    constructor (private http: HttpClient) {
    }

    getPokemons() {
       return this.http.get(`${this.baseURL}/pokemon`);
    }
}