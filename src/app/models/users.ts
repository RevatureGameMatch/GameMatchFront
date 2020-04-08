export class User {

    id: number;
    playerUsername: string;
    playerPassword: string;
    playerEmail: string;
    playerRole: string;

    constructor(playerUsername: string, playerPassword: string, playerEmail: string, playerRole){
        this.id = 0;
        this.playerUsername = playerUsername;
        this.playerPassword = playerPassword;
        this.playerEmail = playerEmail;
        this.playerRole = playerRole;
    }

}