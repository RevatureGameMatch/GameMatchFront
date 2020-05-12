import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  url = "http://www.revatureprojects.com:8085/g2g/Player";

  constructor(private http: HttpClient) { }

  getSkills(user: User) {
    return this.http.get(this.url + "/Id/" + user.playerId + "/Skills");
  }
}
