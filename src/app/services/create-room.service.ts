import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../models/room';
import { Observable } from 'rxjs';
import { Game } from '../models/game';
import { User } from '../models/users';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateRoomService {
 

  constructor(private http: HttpClient) { }

  url = environment.roomUri;

  createRoom(sender: User, r:Room): Observable<Object>{
    let t ={
      sender: sender,
      room: r,
    }
    return this.http.post<{Object}>(this.url, t);
  }

  //TODO confirm this is not necessary because of get-games.service.ts and delete
  getGames(): Observable<Game[]> {
   return this.http.get<Game[]>(environment.gameUri);   
  }

}
