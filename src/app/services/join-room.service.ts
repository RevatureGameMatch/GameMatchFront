import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class JoinRoomService {

  url = "http://www.revatureprojects.com:8085/g2g/Room";

  constructor(private http: HttpClient) { }

  getRoomById(id: number) {
    return this.http.get<Room>(this.url + "/id/" + id);
  }
}
