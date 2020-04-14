import { Game } from './game';

export class Room {
    roomId: number;
    discordTextChannelId: number;
    discordVoiceChannelId: number;
    discordRoleId: number;
    created: Date;
    closed: Date;
    name: string;
    currentPlayers: number;
    maxPlayers: number;
    description: string;
    status: string;
    style: string;
    game: Game;


    constructor(name: string, description: string, status: string, style: string, maxPlayers: number, game: Game) {
            this.created =  new Date(Date.now());
            this.name = name;    
            this.currentPlayers = 0;
            this.maxPlayers = maxPlayers;
            this.description = description;
            this.status = status;
            this.style = style;
            this.game = game;
        
    }
}