import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/users';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = environment.playerLoginUri;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<User>{
    let loginTemplate = {
      playerUsername: username,
      playerPassword: password,
    }
    return this.http.post<User>(this.url, loginTemplate);
  }
}
