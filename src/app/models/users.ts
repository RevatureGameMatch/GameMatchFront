export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string; 
    email: string;
    type: number;

    constructor(username: string, password: string, firstName: string, lastName: string, email: string, type: number){
        this.id = 0;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.type = type;
    }
}