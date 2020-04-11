import { Component, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { GetGamesService } from 'src/app/services/get-games.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-supported-games',
  templateUrl: './supported-games.component.html',
  styleUrls: ['./supported-games.component.css']
})
export class SupportedGamesComponent implements OnInit {
  user$: Observable<User>;
  user: User;
  games: Game[];
  isModerator: boolean;
  image;
  images;

  constructor(
    private storage: StorageMap,
    private gameService: GetGamesService,
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.user$ = this.storage.get<User>('currentUser');
    this.user$.subscribe(
      (result) => {
        this.user = result
        if (this.user != null && (this.user.playerRole == "MODERATOR" || this.user.playerRole == "ADMIN")) {
          this.isModerator = true;
          console.log(this.user, "; isModerator: " + this.isModerator);
        }
      }
    );

    this.gameService.getGames().subscribe(
      (result) => {
        this.games = result;
        console.log(this.games);

        // TODO: Finish logic to pull images from API
        // this.games.forEach(game => {
        //   this.gameService.getGameFromAPI(game.gameId).subscribe(
        //     (result) => {
        //       // @ts-ignore
        //       this.image = result.background_image;
        //     }
        //   )
        // });
      }
    )
    
  }


}
