import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { SurveysService } from 'src/app/services/surveys.service';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  user: User;
  user$: Observable<User>;
  roomSurveySet;
  faThumbsDown = faThumbsDown;
  faThumbsUp = faThumbsUp;
  faCheckCircle = faCheckCircle;
  completed: boolean;

  constructor(
    private storage: StorageMap,
    private surveyService: SurveysService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.user$ = this.storage.get<User>('currentUser');
    this.user$.subscribe(
      (result) => { 
        this.user = result;

        this.surveyService.getSurveys(this.user).subscribe(
          (result) => {
            this.roomSurveySet = result;
            
          }
        )
      }
    );
  }

  submitSurvey(roomId: number, player: User, skill: Skill, value: number) {
    this.completed = true;
    this.surveyService.submitSurvey(roomId, player, this.user, skill, value).subscribe(
      (result) => {
        // @ts-ignore
        console.log(result.message);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
