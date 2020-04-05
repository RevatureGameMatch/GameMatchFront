import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<User>{
    let loginTemplate = {
      username: username,
      password: password,
    }
    return this.http.post<User>("http://localhost:8080/g2g/PlayerLogin", loginTemplate);
  }
}
