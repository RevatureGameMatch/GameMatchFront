import { Component, OnInit } from '@angular/core';
import { ViewRoomsService } from 'src/app/services/view-rooms.service';
import { StorageMap } from '@ngx-pwa/local-storage';
import { User } from 'src/app/models/users';
import { Room } from 'src/app/models/room';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { faUsers, faUserLock, faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-join-room',
  templateUrl: './view-rooms.component.html',
  styleUrls: ['./view-rooms.component.css']
})
export class ViewRoomsComponent implements OnInit {
  faUsers = faUsers;
  faUserLock = faUserLock;
  faPlus = faPlus;
  user: User;
  user$: Observable<User>;
  rooms$: Observable<Room[]>;
  gameId;
  style;
  noGames: boolean;
  isLoaded: boolean;

  constructor(
    private viewService: ViewRoomsService,
    private storage: StorageMap,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('id');
    this.style = this.route.snapshot.paramMap.get('style');
    this.isLoaded = false;

    // @ts-ignore
    this.user$ = this.storage.get<User>('currentUser');
    this.user$.subscribe(
      (result) => {
        this.user = result
        this.isLoaded = true;

        if (this.gameId) {
          this.rooms$ = this.viewService.getRoomsByGame(this.user, this.gameId);  
          this.rooms$.subscribe(
            (result) => {
              this.noGames = (result == null);
            },
            (error) => {}
          );

        } else if (this.style == 'casual') {
          this.rooms$ = this.viewService.getCasualRooms(this.user);
          this.rooms$.subscribe(
            (result) => {
              this.noGames = (result == null);
            },
            (error) => {}
          );

        } else if (this.style == 'serious') {
          this.rooms$ = this.viewService.getSeriousRooms(this.user);
          this.rooms$.subscribe(
            (result) => {
              this.noGames = (result == null);
            },
            (error) => {}
          );

        } else if (this.style == 'hybrid') {
          this.rooms$ = this.viewService.getHybridRooms(this.user);
          this.rooms$.subscribe(
            (result) => {
              this.noGames = (result == null);
            },
            (error) => {}
          );
        }
      }
    );
  }

  joinRoom(room: Room) {
    this.storage.set('currentRoom', room).subscribe(
      () => {}
    );
  }

  filterCasual() {
    if (this.gameId && this.style != 'casual') {
      this.style = 'casual';
      this.rooms$ = this.viewService.getCasualRoomsByGame(this.user, this.gameId);
    } else if (this.style != 'casual') {
      this.style = 'casual';
      this.rooms$ = this.viewService.getCasualRooms(this.user);
      this.router.navigateByUrl('/rooms/casual');
    }
  }

  filterSerious() {
    if (this.gameId && this.style != 'serious') {
      this.style = 'serious';
      this.rooms$ = this.viewService.getSeriousRoomsByGame(this.user, this.gameId);
    } else if (this.style != 'serious') {
      this.style = 'serious';
      this.rooms$ = this.viewService.getSeriousRooms(this.user);
      this.router.navigateByUrl('/rooms/serious');
    }
  }

  filterHybrid() {
    if (this.gameId && this.style != 'hybrid') {
      this.style = 'hybrid';
      this.rooms$ = this.viewService.getHybridRoomsByGame(this.user, this.gameId);
    } else if (this.style != 'hybrid') {
      this.style = 'hybrid';
      this.rooms$ = this.viewService.getHybridRooms(this.user);
      this.router.navigateByUrl('/rooms/hybrid');
    }
  }

  filterAll() {
    if (this.gameId && this.style != 'all') {
      this.style = 'all';
      this.rooms$ = this.viewService.getRoomsByGame(this.user, this.gameId);
    }
  }
}
