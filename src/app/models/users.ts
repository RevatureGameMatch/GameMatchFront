export class User {

    id: number;
    playerUsername: string;
    playerPassword: string;
    playerEmail: string;
    playerRole: string;

    constructor(playerUsername: string, playerPassword: string, playerEmail: string, playerRole){
        this.playerUsername = playerUsername;
        this.playerPassword = playerPassword;
        this.playerEmail = playerEmail;
        this.playerRole = playerRole;
    }

}