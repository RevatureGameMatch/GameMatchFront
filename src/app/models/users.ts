export class User {

    playerId: number;
    playerUsername: string;
    playerEmail: string;
    playerPassword: string;
    playerRole: string;

    constructor(playerUsername: string, playerEmail: string, playerPassword: string, playerRole: string){
        this.playerUsername = playerUsername;
        this.playerPassword = playerPassword;
        this.playerEmail = playerEmail;
        this.playerRole = playerRole;
    }

}