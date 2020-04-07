import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewRoomsService {

  constructor(http: HttpClient) { }

  getCasualRooms() {

  }

  getSeriousRooms() {

  }

  getHybridRooms() {
    
  }
}
