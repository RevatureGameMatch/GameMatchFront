import { Component, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  expanded: boolean;

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(
    private storage: StorageMap,
    private loginService: LoginService,
    private formBuilder: FormBuilder,) {
      this.loginForm = this.formBuilder.group({
        username: this.username,
        password: this.password,
      })
     }

  ngOnInit(): void {
    this.expanded = false;
  }

  onSubmit(loginTemplate): void {
    this.loginService.login(loginTemplate.username, loginTemplate.password)
      .subscribe(
        (user) => {
          this.storage.set('currentUser', user).subscribe(() => {
            location.assign('/dashboard'); 
          });
        },
        (error) => {
          this.expanded = true;
        }
      ); 
  }
}