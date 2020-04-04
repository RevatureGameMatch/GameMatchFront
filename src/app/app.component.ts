import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/users';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleAbbreviated = 'G2G';
  user: Observable<typeof User>;

  constructor(private storage: StorageMap) {}

  ngOnInit(): void{
    // @ts-ignore
    this.user = this.storage.get<User>('currentUser');
  }
}
