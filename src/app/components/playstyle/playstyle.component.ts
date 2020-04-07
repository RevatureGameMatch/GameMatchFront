import { Component, OnInit } from '@angular/core';
import { ViewRoomsService } from 'src/app/services/view-rooms.service';

@Component({
  selector: 'app-playstyle',
  templateUrl: './playstyle.component.html',
  styleUrls: ['./playstyle.component.css']
})
export class PlaystyleComponent implements OnInit {

  constructor(private viewService: ViewRoomsService) { }

  ngOnInit(): void {
  }

  viewCasualRooms() {
    this.viewService.getCasualRooms();
  }

  viewSeriousRooms() {
    this.viewService.getSeriousRooms();
  }

  viewHybridRooms() {
    this.viewService.getHybridRooms();
  }

}
