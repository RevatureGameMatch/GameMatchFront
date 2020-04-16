import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Room } from 'src/app/models/room';
import { CreateRoomService } from 'src/app/services/create-room.service';
import { User } from 'src/app/models/users';
import { Observable } from 'rxjs';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Game } from 'src/app/models/game';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

@Component({

  selector: 'app-create-room',
  templateUrl: './create-room.component.html', 
  styleUrls: ['./create-room.component.css'],

})
export class CreateRoomComponent implements OnInit {

  faSearch = faSearch;
  searchText: string;
  roomForm: FormGroup;
  user: User;

  user$: Observable<User>;

  name = new FormControl('', Validators.maxLength(50));
  style = new FormControl('', Validators.required);
  desc = new FormControl('', Validators.maxLength(250));
  game = new FormControl('', Validators.required);
  maxP= new FormControl('', Validators.required);

  Room: Room;

  Games: Game[];

  Style: String[] = ['Casual', 'Hybrid', 'Serious'];

  expanded: boolean;

  createdRoom: number;

  constructor(private crs: CreateRoomService, private formBuilder: FormBuilder, private storage: StorageMap) {
    this.roomForm = this.formBuilder.group({

      name: this.name,
      style: this.style,
      desc: this.desc,
      game: this.game,
      maxP: this.maxP

    })

   }

  ngOnInit(): void {
    this.expanded = false;
    // @ts-ignore
    this.user$ = this.storage.get<User>('currentUser');
    this.user$.subscribe(
      (result) => {
        this.user = result
        console.log(this.user);

    
      }
    );

    this.crs.getGames().subscribe(
     (result)=>{this.Games = result}
   );
  }

  onSubmit(){
    let g = this.Games[this.roomForm.value.game];

    let r = new Room( this.roomForm.value.name,
      this.roomForm.value.desc, 'JOINING', this.roomForm.value.style.toUpperCase(), 
      this.roomForm.value.maxP, g
    )
    let u = this.user;
  
    this.crs.createRoom(u,r).subscribe(
      (value)=>{
        this.storage.set('currentRoom', value).subscribe(() => {
          
        })
        this.createdRoom = Object.values(value)[0];
        this.expanded = true;
        console.log(this.createdRoom);
      },
      (error)=>{
        alert("Unable to create room.");
      }
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
