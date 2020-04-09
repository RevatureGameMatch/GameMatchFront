import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../models/room';
import { User } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewRoomsService {

  url = "http://www.revatureprojects.com:8085/g2g/Rooms";

  constructor(private http: HttpClient) { }

  getCasualRooms(user: User) {
    return this.http.post<Room[]>(this.url + "/Casual", user);
  }

  getSeriousRooms(user: User) {
    return this.http.post<Room[]>(this.url + "/Serious", user);
  }

  getHybridRooms(user: User) {
    return this.http.post<Room[]>(this.url + "/Hybrid", user);
  }
}
