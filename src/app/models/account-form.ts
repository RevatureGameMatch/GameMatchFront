import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';

export class AccountForm {

    public playerEmail: String;
    public playerUsername: String;
    public playerPassword: String;

    constructor(playerUsername:String, playerEmail:String, playerPassword: String){

        this.playerUsername = playerUsername,
        this.playerEmail = playerEmail,
        this.playerPassword = playerPassword

     }

}
