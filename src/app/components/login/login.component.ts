import { Component, OnInit } from '@angular/core';
import { StorageMap, LocalStorage } from '@ngx-pwa/local-storage';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  // Validates that username and password entries are not null
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(
    private storage: LocalStorage,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router) {
      this.loginForm = this.formBuilder.group({
        username: this.username,
        password: this.password,
      })
     }

  ngOnInit(): void {
  }

  onSubmit(loginTemplate): void {
    let input = this.loginService.login(loginTemplate.username, loginTemplate.password)
      .subscribe(input => {
        this.storage.setItem('currentUser', input).subscribe(() => {
          location.assign('/dashboard');
        });
         
      });
    this.loginForm.reset();
    console.log(this.storage.getItem<User>('currentUser'));
  }

}