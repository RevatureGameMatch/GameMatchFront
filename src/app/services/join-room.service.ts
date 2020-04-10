import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../models/room';
import { User } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoinRoomService {

  url = "http://www.revatureprojects.com:8085/g2g/Room/Player";

  constructor(private http: HttpClient) { }


  getDiscordLink(sender: User, room: Room) : Observable<string> {
    let playerRoomTemplate = {
      sender: sender,
      room: room,
    }
    console.log(playerRoomTemplate);
    console.log(JSON.stringify(playerRoomTemplate));
    return this.http.post<string>(this.url, playerRoomTemplate);
  }
}
