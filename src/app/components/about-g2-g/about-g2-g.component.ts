import { Component, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { User } from 'src/app/models/users';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about-g2-g',
  templateUrl: './about-g2-g.component.html',
  styleUrls: ['./about-g2-g.component.css']
})
export class AboutG2GComponent implements OnInit {
  user: Observable<typeof User>;

  constructor(private storage: StorageMap) { }

  ngOnInit(): void {
    // @ts-ignore
    this.user = this.storage.get<User>("currentUser");
  }

}
