import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Room } from 'src/app/models/room';
import { CreateRoomService } from 'src/app/services/create-room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  roomForm: FormGroup;

  style = new FormControl('', Validators.required);
  desc = new FormControl('', Validators.required);
  game = new FormControl('', Validators.required);

  Room: Room;

  

  constructor(private crs: CreateRoomService, private formBuilder: FormBuilder) {
    this.roomForm = this.formBuilder.group({

      


    })

   }

  ngOnInit(): void {
  }

}
