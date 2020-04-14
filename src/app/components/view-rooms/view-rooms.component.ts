import { Component, OnInit } from '@angular/core';
import { ViewRoomsService } from 'src/app/services/view-rooms.service';
import { StorageMap } from '@ngx-pwa/local-storage';
import { User } from 'src/app/models/users';
import { Room } from 'src/app/models/room';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
  rooms: Room[];

  constructor(
    private viewService: ViewRoomsService,
    private storage: StorageMap,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    // @ts-ignore
    this.user$ = this.storage.get<User>('currentUser');
    this.user$.subscribe(
      (result) => {
        this.user = result
        console.log(this.user);

        let style = this.route.snapshot.paramMap.get('style');
        console.log(style);
        if (style == 'casual') {
          this.rooms$ = this.viewService.getCasualRooms(this.user);
        }
        if (style == 'serious') {
          this.rooms$ = this.viewService.getSeriousRooms(this.user);
        }
        if (style == 'hybrid') {
          this.rooms$ = this.viewService.getHybridRooms(this.user);
        }
      }
    );
  }

  joinRoom(room: Room) {
    this.storage.set('currentRoom', room).subscribe(
      () => {}
    );
  }

}
