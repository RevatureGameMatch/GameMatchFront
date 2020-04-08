import { Component, OnInit } from '@angular/core';
import { AccountForm } from 'src/app/models/account-form';
import { CreateAccountService } from 'src/app/services/create-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  newEmail: string;
  newUsername: string;
  newPassword: string;

  constructor(private cas: CreateAccountService) {}

  ngOnInit(): void {
  }

  onSubmit() {
    let a = new AccountForm(this.newEmail, this.newUsername, this.newPassword)
    this.cas.createAccount(a).subscribe(
      (response: AccountForm) => {
        a = response;
      }
    )

  }

}
