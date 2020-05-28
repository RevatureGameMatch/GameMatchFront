import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { SurveysService } from 'src/app/services/surveys.service';
import { faThumbsDown, faThumbsUp, faCheckCircle, faCaretDown } from '@fortawesome/free-solid-svg-icons';
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
  faCaretDown = faCaretDown;
  success: boolean;
  failure: boolean;
  successMessage: string;
  failureMessage: string;
  isLoaded: boolean;

  constructor(
    private storage: StorageMap,
    private surveyService: SurveysService) { }

  ngOnInit(): void {
    this.success = false;
    this.failure = false;
    this.isLoaded = false;
    // @ts-ignore
    this.user$ = this.storage.get<User>('currentUser');
    this.user$.subscribe(
      (result) => { 
        this.user = result;
        this.isLoaded = true;

        if (this.user != undefined) {
          this.surveyService.getSurveys(this.user).subscribe(
            (result) => {
              console.log(result);
              this.roomSurveySet = result;
            },
            (error) => {}
          )
        }
      },
      (error) => {}
    );
  }

  viewSubSkills(roomId, playerId, skillName: string) {
    let parentSkillName: string = skillName.replace(/ /g, "_");
    let parentSkillElement = document.getElementById(roomId + "_" + playerId + "_" + parentSkillName);
    let subSkillsElements = document.getElementsByClassName(roomId + "_" + playerId + "_" + parentSkillName);

    Array.from(subSkillsElements).forEach((skill: HTMLElement) => {
      parentSkillElement.appendChild(skill);
      skill.classList.toggle("hidden");
    })
  }

  submitSurvey(roomId: number, player: User, skill: Skill, value: number) {
    this.surveyService.submitSurvey(roomId, player, this.user, skill, value).subscribe(
      (result) => {
        this.failure = false;
        this.success = true;

        console.log(result)
        // @ts-ignore
        this.successMessage = result.message;
      },
      (error) => {
        this.success = false;
        this.failure = true;

        console.log(error)
        this.failureMessage = error.error.message;
      }
    )
  }
}
