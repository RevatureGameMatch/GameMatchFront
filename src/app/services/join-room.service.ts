import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../models/room';
import { User } from '../models/users';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JoinRoomService {

  url = environment.roomUri;

  constructor(private http: HttpClient) { }


  getDiscordLink(sender: User, room: Room) : Observable<Object> {
    let playerRoomTemplate = {
      sender: sender,
      room: room,
    }
    return this.http.post<Object>(this.url + 'player/', playerRoomTemplate);
  }
}
