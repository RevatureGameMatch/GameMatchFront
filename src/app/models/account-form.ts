//import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';

export class AccountForm {
    
    public playerUsername: String;
    public playerEmail: String;
    public playerPassword: String;
    public playerRole: String;

    constructor(playerUsername:String, playerEmail:String, playerPassword: String,  playerRole: String){

        this.playerUsername = playerUsername,
        this.playerEmail = playerEmail,
        this.playerPassword = playerPassword,
        this.playerRole = playerRole

     }

}
