import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-dev',
  templateUrl: './about-dev.component.html',
  styleUrls: ['./about-dev.component.css']
})
export class AboutDevComponent implements OnInit {
  CurrentDate: Date;
  faLinkedin = faLinkedin;
  faGithubSquare = faGithubSquare;
  faEllipsisH = faEllipsisH;

  constructor() { }

  ngOnInit(): void {
    this.CurrentDate = new Date();
  }

}
