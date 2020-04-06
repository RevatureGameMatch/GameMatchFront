import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { StorageMap, LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private storage: LocalStorage) { }

  ngOnInit(): void {
    console.log(this.storage.getItem<User>('currentUser'));
  }

}
