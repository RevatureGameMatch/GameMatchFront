import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../models/room';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateRoomService {

  constructor(private http: HttpClient) { }

  createRoom(r:Room): Observable<Room>{
    console.log(r);
    return this.http.post<Room>('http://www.revatureprojects.com:8085/g2g/___', r);
  }

}
