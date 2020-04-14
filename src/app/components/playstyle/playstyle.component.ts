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

  constructor(private storage: StorageMap) { }

  ngOnInit(): void {
    this.user$ = this.storage.get<User>('currentUser');
    this.user$.subscribe(
      (result) => {
        this.user = result
        console.log(this.user);
      }
    )
  }

}
