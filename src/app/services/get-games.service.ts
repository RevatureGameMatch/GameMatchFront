import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetGamesService {

  url = environment.gameUri;

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<Game[]>(this.url);
  }

  getGameById(id) {
    return this.http.get<Game>(this.url + "/id/" + id);
  }

  getGameFromAPI(id: number) {
    return this.http.get("https://api.rawg.io/api/games/" + id);
  }

}
