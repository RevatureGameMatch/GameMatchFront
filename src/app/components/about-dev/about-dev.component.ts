import { Component, OnInit, Inject } from '@angular/core';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

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

  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(AboutDevModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.CurrentDate = new Date();
  }

}

@Component({
  selector: 'app-about-dev-modal',
  templateUrl: 'about-dev-modal.component.html',
})
export class AboutDevModalComponent{
  constructor(private dialog: MatDialog) { }

  closeDialog(){
   this.dialog.closeAll();
  }
}

