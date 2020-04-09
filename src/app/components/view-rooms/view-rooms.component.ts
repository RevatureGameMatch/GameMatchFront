import { Component, OnInit } from '@angular/core';
import { ViewRoomsService } from 'src/app/services/view-rooms.service';
import { StorageMap } from '@ngx-pwa/local-storage';
import { User } from 'src/app/models/users';
import { Room } from 'src/app/models/room';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-join-room',
  templateUrl: './view-rooms.component.html',
  styleUrls: ['./view-rooms.component.css']
})
export class ViewRoomsComponent implements OnInit {
  user: User;
  user$: Observable<User>;
  style: String;
  rooms$: Observable<Room[]>;

  constructor(
    private viewService: ViewRoomsService,
    private storage: StorageMap,) { }

  ngOnInit(): void {
    // @ts-ignore
    this.user$ = this.storage.get<User>('currentUser');
    this.user$.subscribe(
      (result) => {
        this.user = result
        console.log(this.user);
      }
    );
  }
  
  viewCasualRooms() {
    this.style = "casual";
    this.viewService.getCasualRooms(this.user).subscribe(
      (result) => {
        console.log(result);
      }
    )
    this.rooms$ = this.viewService.getCasualRooms(this.user);
  }

  viewSeriousRooms() {
    this.style = "serious";
    this.viewService.getCasualRooms(this.user).subscribe(
      (result) => {
        console.log(result);
      }
    )
    return this.viewService.getSeriousRooms(this.user);
  }

  viewHybridRooms() {
    this.style = "hybrid";
    this.viewService.getCasualRooms(this.user).subscribe(
      (result) => {
        console.log(result);
      }
    )
    return this.viewService.getHybridRooms(this.user);
  }

}
