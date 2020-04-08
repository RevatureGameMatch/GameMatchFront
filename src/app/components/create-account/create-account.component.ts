import { Component, OnInit } from '@angular/core';
import { AccountForm } from 'src/app/models/account-form';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent /*implements OnInit*/ {

  type = ['User', 'Moderator', 'Admin'];

  submitted = false;

  onSubmit() {this.submitted = true;}

  model = new AccountForm('','','','','','');

  newAccountForm(){
    this.model = new AccountForm('','','','','','');
  } 

  // constructor() { }

  // ngOnInit(): void {
  // }

}
