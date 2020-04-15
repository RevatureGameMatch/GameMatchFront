import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { SurveysService } from 'src/app/services/surveys.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  user: User;
  user$: Observable<User>;
  surveys;

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
            this.surveys = result;
          }
        )
      }
    );
  }

}
