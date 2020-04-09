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


    constructor(description: string, status: string, style: string, maxPlayers: number) {
            this.created =  new Date(Date.now());
            this.description = description;
            this.currentPlayers = 0;
            this.maxPlayers = maxPlayers;
            this.status = status;
            this.style = style;
    }
}