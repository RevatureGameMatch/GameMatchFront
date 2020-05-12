import { Component, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-playstyle',
  templateUrl: './playstyle.component.html',
  styleUrls: ['./playstyle.component.css']
})
export class PlaystyleComponent implements OnInit {
  user$;
  user;
  isLoaded: boolean;

  constructor(private storage: StorageMap) { }

  ngOnInit(): void {
    this.isLoaded = false;
    this.user$ = this.storage.get<User>('currentUser');
    this.user$.subscribe(
      (result) => {
        this.user = result
        this.isLoaded = true;
      }
    )
  }

}
