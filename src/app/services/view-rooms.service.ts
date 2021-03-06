import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../models/room';
import { User } from '../models/users';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewRoomsService {

  url = environment.roomUri;

  constructor(private http: HttpClient) { }

  getCasualRooms(user: User) {
    return this.http.post<Room[]>(this.url + "style/casual", user);
  }

  getSeriousRooms(user: User) {
    return this.http.post<Room[]>(this.url + "style/serious", user);
  }

  getHybridRooms(user: User) {
    return this.http.post<Room[]>(this.url + "style/hybrid", user);
  }

  getRoomsByGame(user: User, gameId) {
    return this.http.post<Room[]>(this.url + "game/id/" + gameId, user);
  }

  getCasualRoomsByGame(user: User, gameId) {
    return this.http.post<Room[]>(this.url + "game/casual/" + gameId, user);
  }

  getSeriousRoomsByGame(user: User, gameId) {
    return this.http.post<Room[]>(this.url + "game/serious/" + gameId, user);
  }

  getHybridRoomsByGame(user: User, gameId) {
    return this.http.post<Room[]>(this.url + "game/hybrid/" + gameId, user);
  }
}
