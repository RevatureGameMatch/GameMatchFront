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
    return this.http.post<Room[]>(this.url + "Style/Casual", user);
  }

  getSeriousRooms(user: User) {
    return this.http.post<Room[]>(this.url + "Style/Serious", user);
  }

  getHybridRooms(user: User) {
    return this.http.post<Room[]>(this.url + "Style/Hybrid", user);
  }

  getRoomsByGame(user: User, gameId) {
    return this.http.post<Room[]>(this.url + "/Game/Id/" + gameId, user);
  }

  getCasualRoomsByGame(user: User, gameId) {
    return this.http.post<Room[]>(this.url + "/Game/Casual/" + gameId, user);
  }

  getSeriousRoomsByGame(user: User, gameId) {
    return this.http.post<Room[]>(this.url + "/Game/Serious/" + gameId, user);
  }

  getHybridRoomsByGame(user: User, gameId) {
    return this.http.post<Room[]>(this.url + "/Game/Hybrid/" + gameId, user);
  }
}
