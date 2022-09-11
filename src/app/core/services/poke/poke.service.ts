import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(`${environment.pokeApiUrl}pokemon/?offset=0&limit=1154"`);
  }
}
