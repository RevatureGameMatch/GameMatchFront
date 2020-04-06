import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { StorageMap, LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user = this.storage.get<User>('currentUser');

  constructor(private storage: StorageMap) { }

  ngOnInit(): void {
  }
}