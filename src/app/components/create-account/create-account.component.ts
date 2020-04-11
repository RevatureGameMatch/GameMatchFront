import { Component, OnInit } from '@angular/core';
import { AccountForm } from 'src/app/models/account-form';
import { CreateAccountService } from 'src/app/services/create-account.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  accForm: FormGroup;

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);

  AccountForm: AccountForm;

  expanded: boolean;
  usernameExists: boolean;

  constructor(private cas: CreateAccountService, private formBuilder: FormBuilder) {
    this.accForm = this.formBuilder.group({

      email: this.email,
      username: this.username,
      password: this.password

    })

  }

  ngOnInit(): void {
    this.expanded = false;
    this.usernameExists = false;
  }

  onSubmit() {
    let a = new AccountForm(this.accForm.value.username, this.accForm.value.email, this.accForm.value.password, 'PLAYER')
    
    // console.log(a); 
    // this.cas.createAccount(a).subscribe(
    //   ()=>{}
    // );
    //   this.accForm.reset();
    //   this.expanded = true;
     this.cas.createAccount(a).subscribe(
      (input) => { 
        this.expanded = true; 
      },
      (error) => {
        this.usernameExists = true;
      }
    );
    this.accForm.reset();  
  }
}
