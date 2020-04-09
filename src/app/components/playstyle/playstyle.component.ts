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
  style;

  constructor(
    private viewService: ViewRoomsService,
    private storage: StorageMap,) { }

  ngOnInit(): void {
    this.user = this.storage.get<User>('currentUser');
  }

  viewRooms(style: String) {
    console.log(style);
    if (style = "casual") {
      this.viewCasualRooms();
    }
    if (style = "serious") {
      this.viewSeriousRooms();
    }
    if (style = "hybrid") {
      this.viewHybridRooms();
    }
  }

  
  viewCasualRooms() {
    this.style = "casual";
    console.log(this.style);
    this.viewService.getCasualRooms(this.user);
  }

  viewSeriousRooms() {
    this.style = "serious";
    console.log(this.style);
    this.viewService.getSeriousRooms(this.user);
  }

  viewHybridRooms() {
    this.style = "hybrid";
    console.log(this.style);
    this.viewService.getHybridRooms(this.user);
  }

}
