import { Component, OnInit } from '@angular/core';
import { ViewRoomsService } from 'src/app/services/view-rooms.service';
import { User } from 'src/app/models/users';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-playstyle',
  templateUrl: './playstyle.component.html',
  styleUrls: ['./playstyle.component.css']
})
export class PlaystyleComponent implements OnInit {
  user;

  constructor(
    private viewService: ViewRoomsService,
    private storage: StorageMap,) { }

  ngOnInit(): void {
    this.user = this.storage.get<User>('currentUser');
  }

  viewCasualRooms(user: User) {
    this.viewService.getCasualRooms(user);
  }

  viewSeriousRooms(user: User) {
    this.viewService.getSeriousRooms(user);
  }

  viewHybridRooms(user: User) {
    this.viewService.getHybridRooms(user);
  }

}
