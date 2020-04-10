import { Component, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { User } from 'src/app/models/users';
import { Observable } from 'rxjs';
import { Room } from 'src/app/models/room';
import { JoinRoomService } from 'src/app/services/join-room.service';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent implements OnInit {
  user: User;
  user$: Observable<User>;
  room: Room;
  id: number;

  constructor(
    private storage: StorageMap,
    private roomService: JoinRoomService,) { }

  ngOnInit(): void {
    // @ts-ignore
    this.user$ = this.storage.get<User>('currentUser');
    this.user$.subscribe(
      (result) => {
        this.user = result;
      }
    );

    this.roomService.getRoomById(this.id).subscribe(
      (result) => {
        this.room = result;
        console.log(this.room);
      }
    );
  }

}
