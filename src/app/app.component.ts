import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/users';
import { StorageMap, LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleAbbreviated = 'G2G';
  user: Observable<typeof User>;

  constructor(
    private storage: LocalStorage,
    private router: Router,
    ) {}

  ngOnInit(): void{
    // @ts-ignore
    this.user = this.storage.getItem<User>('currentUser');
  }

  logout(): void{
    this.storage.removeItem('currentUser').subscribe(() => {
      location.assign('/home');
    });

  }
}
