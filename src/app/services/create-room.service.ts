import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../models/room';
import { Observable } from 'rxjs';
import { Game } from '../models/game';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class CreateRoomService {
 

  constructor(private http: HttpClient) { }

  createRoom(sender: User, r:Room): Observable<Object>{
    let t ={
      sender: sender,
      room: r,
    }
    console.log(t);
    console.log(JSON.stringify(t));
    return this.http.post<{Object}>('http://www.revatureprojects.com:8085/g2g/Room', t);
  }

  getGames(): Observable<Game[]> {
   return this.http.get<Game[]>('http://www.revatureprojects.com:8085/g2g/Game');   
  }

}
