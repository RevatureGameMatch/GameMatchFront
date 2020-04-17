import { Component, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { User } from 'src/app/models/users';
import { Observable } from 'rxjs';
import { Room } from 'src/app/models/room';
import { JoinRoomService } from 'src/app/services/join-room.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent implements OnInit {
  user: User;
  user$: Observable<User>;
  room: Room;
  room$: Observable<Room>;
  appLink: SafeUrl;
  webLink;
  isLoaded: boolean;

  constructor(
    private storage: StorageMap,
    private roomService: JoinRoomService,
    protected sanitizer: DomSanitizer,) { }

  ngOnInit(): void {
    this.isLoaded = false;
    // @ts-ignore
    this.user$ = this.storage.get<User>('currentUser');
    this.user$.subscribe(
      (result) => {
        this.user = result;
        this.isLoaded = true;

        // @ts-ignore
        this.room$ = this.storage.get<Room>('currentRoom');
        this.room$.subscribe(
          (result) => {
            this.room = result;

            this.roomService.getDiscordLink(this.user, this.room).subscribe(
              (result) => {
                // @ts-ignore
                this.appLink = this.sanitizer.bypassSecurityTrustUrl(result.urlApp);
                // @ts-ignore
                this.webLink = result.urlWeb;
                // @ts-ignore
                window.open(result.urlApp);
              }
            )
          }
        );
      }
    );

    setTimeout(() => {
      location.assign("/surveys");
    }, 660000);
  }
}
