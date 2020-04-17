import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user$: Observable<User>;
  user;
  isLoaded: boolean;

  constructor(private storage: StorageMap) { }

  ngOnInit(): void {
    this.isLoaded = false;
    // @ts-ignore
    this.user$ = this.storage.get<User>('currentUser');
    this.user$.subscribe(
      (result) => {
        this.user = result;
        this.isLoaded = true;
      }
    )
  }
}
