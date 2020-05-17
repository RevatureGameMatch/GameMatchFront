import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/users';
import { StorageMap } from '@ngx-pwa/local-storage';
import { faUser, faHome, faGamepad, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleAbbreviated = 'G2G';
  user$: Observable<User>;
  user: User;
  faUser = faUser;
  faHome = faHome;
  faGamepad = faGamepad;
  faBars = faBars;

  constructor(
    private storage: StorageMap,
    ) {}

  ngOnInit(): void{
    // @ts-ignore
    this.user$ = this.storage.get<User>('currentUser');
    this.user$.subscribe(
      (result) => {
        this.user = result;
      }
    )
  }

  logout(): void{
    this.storage.clear().subscribe(() => {
      location.assign('/home');
    });
  }

  showNav(): void{
    let navItems = document.getElementById("nav-items");
    navItems.classList.toggle("hidden");
  }
}
