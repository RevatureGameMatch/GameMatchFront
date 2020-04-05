import { Component, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(
    private storage: StorageMap,
    private loginService: LoginService,
    private formBuilder: FormBuilder,) {
      this.loginForm = this.formBuilder.group({
        username: '',
        password: '',
      })
     }

  ngOnInit(): void {
  }

  onSubmit(loginTemplate): void {
    let input = this.loginService.login(loginTemplate.username, loginTemplate.password)
      .subscribe(input => {
        this.storage.set('currentUser', input);
      });
    this.loginForm.reset();
    console.log(this.storage.get<User>('currentUser'));
  }

}