import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users';
import { StorageMap } from '@ngx-pwa/local-storage';
import { SkillsService } from 'src/app/services/skills.service';
import { faAward } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user$: Observable<User>;
  user: User;
  skills;
  faAward = faAward;
  isLoaded: boolean;

  constructor(
    private storage: StorageMap,
    private skillsService: SkillsService,
    ) {}

  ngOnInit(): void{
    this.isLoaded = false;
    // @ts-ignore
    this.user$ = this.storage.get<User>('currentUser');
    this.user$.subscribe(
      (result) => {
        // @ts-ignore
        this.user = result;
        this.isLoaded = true;

        if (this.user != undefined) {
          this.skillsService.getSkills(this.user).subscribe(
            (result) => {
              this.skills = result;
            },
            (error) => {}
          )
        }
      },
      (error) => {}
    )
  }
}
