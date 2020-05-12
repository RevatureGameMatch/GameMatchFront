import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users';
import { Room } from '../models/room';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SurveysService {

  url = "http://www.revatureprojects.com:8085/g2g/Survey";

  constructor(private http: HttpClient) { }

  getRooms(user: User) {
    return this.http.post<Room[]>(this.url, user);
  }

  getSurveys(user: User) {
    return this.http.post(this.url + "/Player", user);
  }

  getSurveysByRoom(user: User, roomId: number) {
    return this.http.post(this.url + "/Room/Id/" + roomId, user);
  }

  submitSurvey(roomId: number, player: User, modifiedBy: User, skill: Skill, value: number) {
    let surveyTemplate = {
      player: player,
      modifiedBy: modifiedBy,
      skill: skill,
      value: value,
    }
    return this.http.post(this.url + "/Room/Id/" + roomId + "/Submit", surveyTemplate);
  }

}
