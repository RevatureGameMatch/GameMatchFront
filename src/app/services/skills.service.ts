import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  url = environment.playerUri;

  constructor(private http: HttpClient) { }

  getSkills(user: User) {
    return this.http.get(this.url + "Id/" + user.playerId + "/Skills");
  }
}
