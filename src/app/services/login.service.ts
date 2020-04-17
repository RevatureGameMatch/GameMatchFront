import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://www.revatureprojects.com:8085/g2g/PlayerLogin";

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<User>{
    let loginTemplate = {
      playerUsername: username,
      playerPassword: password,
    }
    return this.http.post<User>(this.url, loginTemplate);
  }
}
