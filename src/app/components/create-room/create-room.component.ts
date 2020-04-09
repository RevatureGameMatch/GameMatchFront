import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Room } from 'src/app/models/room';
import { CreateRoomService } from 'src/app/services/create-room.service';
import { User } from 'src/app/models/users';
import { Observable } from 'rxjs';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  roomForm: FormGroup;
  user: User;

  user$: Observable<User>;

  style = new FormControl('', Validators.required);
  desc = new FormControl('', [Validators.required, Validators.maxLength(250)]);
  game = new FormControl('', Validators.required);
  maxP= new FormControl('', Validators.required);

  Room: Room;

  Game: String [];

  Style: String[] = ['Casual', 'Hybrid', 'Serious'];

  constructor(private crs: CreateRoomService, private formBuilder: FormBuilder, private storage: StorageMap) {
    this.roomForm = this.formBuilder.group({

      style: this.style,
      desc: this.desc,
      game: this.game,
      maxP: this.maxP

    })

   }

  ngOnInit(): void {
    // @ts-ignore
    this.user$ = this.storage.get<User>('currentUser');
    this.user$.subscribe(
      (result) => {
        this.user = result
        console.log(this.user);

    
      }
    );

    this.Game = CreateRoomService.getGames();
  }

  onSubmit(){
    let r = new Room(
      this.roomForm.value.desc, 'JOINING', this.roomForm.value.style, this.roomForm.value.maxP
    )
    console.log(r);
    this.crs.createRoom(r).subscribe(
      ()=>{}
    );
    this.roomForm.reset();
  }

  changeGame(g) {
    console.log(g.value)
    this.game.setValue(g.target.value, {
      onlySelf: true
    })
  }

  changeStyle(s) {
    console.log(s.value)
    this.style.setValue(s.target.value, {
      onlySelf: true
    })
  }

}
