import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountForm } from '../models/account-form';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  constructor(private http: HttpClient) { }

  url = environment.playerUri;

  createAccount(f:AccountForm): Observable<AccountForm>{
    console.log(f);
    return this.http.post<AccountForm>(this.url, f);
  }

}
