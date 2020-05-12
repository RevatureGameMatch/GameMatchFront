import { Component, OnInit } from '@angular/core';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Game to Gain';
  faDiscord = faDiscord;

  constructor() { }

  ngOnInit(): void {
  }

}
