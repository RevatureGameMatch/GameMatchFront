import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GetGamesService {

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<Game[]>("http://www.revatureprojects.com:8085/g2g/Game");
  }
}
