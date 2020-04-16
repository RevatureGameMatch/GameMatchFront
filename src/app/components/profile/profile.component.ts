import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user$: Observable<User>;
  user: User;
  skills;

  constructor(
    private storage: StorageMap,
    private router: Router,
    private skillsService: SkillsService,
    ) {}

  ngOnInit(): void{
    // @ts-ignore
    this.user$ = this.storage.get<User>('currentUser');
    this.user$.subscribe(
      (result) => {
        // @ts-ignore
        this.user = result;
        console.log(this.user);

        this.skillsService.getSkills(this.user).subscribe(
          (result) => {
            console.log(result);
            this.skills = result;
          }
        )
      }
    )
  }
}
