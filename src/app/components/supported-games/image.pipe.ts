import { Pipe, PipeTransform } from '@angular/core';
import { GetGamesService } from 'src/app/services/get-games.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  constructor(private gameService: GetGamesService) {}

  transform(rawgId: number): Observable<any> {

    return this.gameService.getGameFromAPI(rawgId)

  }

}
