import { Component, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { User } from 'src/app/models/users';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent implements OnInit {
  user: User;
  user$: Observable<User>;

  constructor(private storage: StorageMap) { }

  ngOnInit(): void {
    // @ts-ignore
    this.user$ = this.storage.get<User>('currentUser');
    this.user$.subscribe(
      (result) => {
        this.user = result;
      }
    );
  }

}
