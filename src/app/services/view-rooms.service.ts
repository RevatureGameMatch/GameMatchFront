import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class ViewRoomsService {

  url = "http://www.revatureprojects.com:8085/g2g/Room";

  constructor(private http: HttpClient) { }

  getCasualRooms() {
    return this.http.get<Room>(this.url + "/casual");
  }

  getSeriousRooms() {
    return this.http.get<Room>(this.url + "/serious");
  }

  getHybridRooms() {
    return this.http.get<Room>(this.url + "/hybrid");
  }
}
