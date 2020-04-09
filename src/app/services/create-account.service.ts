import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountForm } from '../models/account-form';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  constructor(private http: HttpClient) { }

  createAccount(f:AccountForm): Observable<AccountForm>{
    console.log(f);
    return this.http.post<AccountForm>("http://www.revatureprojects.com:8085/g2g/Player", f);
  }
  

}
